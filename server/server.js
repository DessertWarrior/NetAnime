const dotenv = require('dotenv');
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
dotenv.config();
const app = express();

const pool = new Pool({ connectionString: process.env.DATABASE_URL})
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(require('body-parser').urlencoded( {extended: false}));

app.get('/api/animeList',(req,res)=>{
  pool.query(`SELECT anime.*, ARRAY_AGG(animeGenre.genre) AS genres FROM anime
  INNER JOIN animeGenre ON anime.id = animeGenre.anime_id
  GROUP BY anime.id ORDER BY anime.id ASC;`).then((response) => {
    res.send(response.rows);
  })

})
app.get('/api/catagories',(req,res)=>{
  pool.query(`SELECT DISTINCT genre FROM animeGenre`).then(response=>{
    const genres = response.rows.map(element=>element= element.genre); //turn element obj into value
    res.send(genres);
  });
})

app.get('/api/animeList/category',(req,res)=>{
  let stringCategory = req.query.category;
  if (typeof(stringCategory) === 'undefined')
    res.status(400).send('Bad Request');


  let categories = stringCategory.split(',');
  console.log(categories)
  let mappingGenre = categories.map(element=>`anime.id IN (SELECT anime_id FROM animeGenre WHERE genre='${element}')`).join(` AND `);

  //select all anime, and genres(aggregate all genre thats same id to an array) if anime_id matches id in anime, with a delimiter of all the ids that contains Fantasy Genre
  const query = `SELECT anime.*, ARRAY_AGG(animeGenre.genre) AS genres
  FROM anime
  INNER JOIN animeGenre
  ON anime.id = animeGenre.anime_id
  WHERE ${mappingGenre} GROUP BY anime.id`;

  pool.query(query).then(response=>{
    console.log(response.rows)
    res.send(response.rows);
  });
})
app.post('/api/animeList',(req,res)=>{
  let data = req.body;
  let genres = data.genres;
  if (!Array.isArray(genres))
  {
    if (!data.genres) 
      genres=['others']
    else
      genres = genres.split(',');
  }
  console.log(genres);
  const values = [
    data.title || null,
    data.synopsis || null,
    data.image || null,
    data.studio || null,
    data.source || null,
    data.theme || null,
    data.score || null,
    data.opening || null
  ];
  pool.query(`INSERT INTO anime(title,synosis,image,studio,source,theme,score,opening) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
  values).then(response=>{
    result = response.rows[0];
    genres.forEach((genre)=>{
      pool.query(`INSERT INTO animeGenre(name,genre,anime_id) VALUES ($1,$2,$3)`,[data.title,genre,result.id])
    })
    return result;
  }).then(result=>{
    result.genres = genres;
    console.log(result);
    res.send(result);
  }).catch(e=>res.status(400).send('Bad Request'))
  
})
app.patch('/api/animeList',(req,res)=>{
  let data = req.body;
  let genres = data.genres;
  if (!Array.isArray(genres))
  {
    if (data.genres=='') 
      genres=[]
    else
      genres = genres.split(',');
  }
  console.log(genres)
  if (isNaN(data.id))
    res.status(400).send('Not found');

  let query= `UPDATE anime SET title=COALESCE($1,title), synosis=COALESCE($2,synosis),
  image=COALESCE($3,image),studio=COALESCE($4,studio),source=COALESCE($5,source),
  theme=COALESCE($6,theme),score=COALESCE($7,score),opening=COALESCE($8,opening) WHERE id = $9 RETURNING *`
  let values = [
    data.title || null,
    data.synosis || null,
    data.image || null,
    data.studio|| null,
    data.source|| null,
    data.theme|| null,
    data.score|| null,
    data.opening|| null,
    data.id
  ]
  pool.query(query, values).then(response=>{
    return response.rows;
  }).then(response=>{
    pool.query(`SELECT id, genre from animeGenre WHERE anime_id = $1`,[data.id]).then(element=>{
      let matchList = element.rows;
     
      //update all the genres, if not already exist create a new animeGenre
      genres.forEach(async (genre,i) => {
        let index = matchList.findIndex((element)=>{!element? -1 :element.genre ==genre})
          if (index != -1) 
          {
            matchList[index] = null;
          }
          else {
             await pool.query(`INSERT INTO animeGenre(name,genre,anime_id) VALUES ($1,$2,$3)`,[data.title,genre,data.id])
          }
      }); 
      
      //delete all the rest of the genres from animeGenre that doesnt match
      matchList.forEach(async (element)=>{
        if (element)
          await pool.query(`DELETE FROM animeGenre WHERE id = $1`,[element.id])
      })
    }).then(()=>{
      response[0].genres = genres;
      console.log(response[0]);
      res.status(202).send(response[0]);
    })
  }).catch(e=>res.status(400).send('Bad Request'))
})
app.delete('/api/animeList',(req,res)=>{
  let data = req.body;
  pool.query(`DELETE FROM animeGenre WHERE anime_id = $1 RETURNING genre`,[data.id]).then(response=>{
    if (response.rows.length ==0 ) return res.status(404).send('Not Found');  //send 404 if id is not found. 

    response.rows.forEach((element,index)=>{
      response.rows[index]= element.genre;
    })
    return response.rows;
    res.send(response.rows);
  }).then((result)=>{
    pool.query(`DELETE FROM anime WHERE id = $1 RETURNING *`,[data.id]).then(response=>{
      console.log(response.rows[0]);
      let animeInformation = response.rows[0];
      animeInformation.genres = result;
      res.send(animeInformation);
    })
  })
})
app.use((req,res)=>{
  res.status(404).send('Not found');
})
app.listen(port,()=>{
    console.log('listening to port '+ port)
})
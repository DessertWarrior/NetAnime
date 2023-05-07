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
  console.log(stringCategory)
  let categories = stringCategory.length==1? stringCategory.split(',') : [stringCategory];
  let mappingGenre = categories.map(element=>`genre='${element}'`).join(` AND `);

  //select all anime, and genres(aggregate all genre thats same id to an array) if anime_id matches id in anime, with a delimiter of all the ids that contains Fantasy Genre
  const query = `SELECT anime.*, ARRAY_AGG(animeGenre.genre) AS genres
  FROM anime
  INNER JOIN animeGenre
  ON anime.id = animeGenre.anime_id
  WHERE anime.id IN (SELECT anime_id FROM animeGenre WHERE ${mappingGenre}) GROUP BY anime.id`
  pool.query(query).then(response=>{
    res.send(response.rows);
  });
})
// app.get("/api/animeList/:id",(req, res, next) => {
//     let id = req.params.id;
//     if (isNaN(id)) next(404);
//     pg.query(`SELECT * FROM anime WHERE id = $1`, [id]).then((response) => {
//       if (response.rows.length === 0) return next(404);
//       else {
//         pg.query(`SELECT genre FROM animeGenre WHERE anime_id = $1`, [id]).then(
//           (genres) => {
//             let animeDetails = response.rows[0];
//             let temp = [];
//             for (let i = 0; i < genres.rows.length; i++) {
//               temp.push(genres.rows[i].genre);
//             }
//             animeDetails.genre = temp;
//             res.send(animeDetails);
//           }
//         );
//       }
//     });
//   });

app.listen(port,()=>{
    console.log('listening to port '+ port)
})
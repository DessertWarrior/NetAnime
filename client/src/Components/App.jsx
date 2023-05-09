import React, { useState, useEffect } from 'react'
import MainWrapper from './MainWrapper'
import Container from './Container'
import {data, categories, selectCatagoryList, postData, deleteData} from '../Functions/fetchData.js'

function App() {
  const [card,setCard] = useState({});
  const [category,setCategory] = useState([]);
  const [genres,setGenres] = useState({});
  const [animes,setAnimes] = useState([]);
  const [animeContainer,setAnimeContainer] = useState([]);
  const [tab, setTab] = useState(false);
  const [searchword, setSearchWord] = useState('');
  useEffect(()=>{
        const fetchData = async()=>{
            const result = await data();
            
            setAnimeContainer(result);
            setAnimes(result);
            setCategory(await categories()); 
        }
        fetchData();
    },[]) //fetch data only at the first rerender
  useEffect(()=>{
    let regexGenres = Object.keys(genres);
      if (regexGenres.length== 0)
        setAnimes(animeContainer);
      else
      {
        let filteredContainer = animeContainer.filter(element=>{
          return regexGenres.every(genre=>element.genres.includes(genre))//the every method returns true when all elements in genreList return true.
        })
        setAnimes(filteredContainer)
        console.log(filteredContainer)
      }
      // const fetchData = async ()=>{
      //   const result= await selectCatagoryList(genres)
      //   setAnimes(result);
      // }
      // fetchData()
    }, [genres]) //updates whenever genre hook is updated
  useEffect(()=>{
    setAnimes(animeContainer);
  }, [animeContainer])  //whenever animeContainer is updated,rerender the animeGallery
  useEffect(()=>{
    if(searchword != '')
    {
      const filteredContainer = animeContainer.filter(element=>element.title.toLowerCase().match(new RegExp('.*'+searchword.toLowerCase()+'.*')))
      setAnimes(filteredContainer);
    }
    else
      setAnimes(animeContainer)
  }, [searchword])  //search word filter

  
  const cardClick=(value)=>{
    setCard(value);
  } //eventListener for Clicking the card in Anime Gallery
  const loadPosts=()=>{
    setCard({});
    setAnimes(animeContainer)
  } //eventLister for clicking title, returning empty card which return back to Anime Gallery
  const addPost=()=>{
    const dataValue = {
      title: '',
      synosis: '',
      image: '',
      studio: '',
      source: '',
      theme: '',
      score: '',
      opening: '',
      genres: ''
    }
    setCard(dataValue)
  }
  const deletePost = async ()=>{
    const data = await deleteData(card)
    if (data)
    {
      const newContainer = animeContainer.filter(element=>element.id !== data.id)
      setAnimeContainer(newContainer);
      loadPosts();
    }
    
  }
  const searchValue = (value) =>{
    setSearchWord(value);
  }
  const filteredCards= async (value)=>{
    const tempGenre = {...genres};
    console.log(value);
    if (!genres[value])
      tempGenre[value] = value;
    else
      delete tempGenre[value];
    
  setGenres(tempGenre);

} //event Listener for genre sort
  const handleEdit= async (value)=>{
    const result = await postData(value)
    let index = animeContainer.findIndex(element=>element.id===result.id);   //find index of id inside animecontainer
    if (index == -1) //if not found append to the animeContainer
    {
      setAnimeContainer([...animeContainer,result]);
      loadPosts() //rerender back to animeContainer
    }
    else {
      let newContainer = [...animeContainer];
      newContainer[index] = result;
      setAnimeContainer(newContainer);
    }
  }
  const tabClick = ()=>{
    if (tab)
      setTab(false);
    else
      setTab(true);
  }
  const propList= {
    card,
    category,
    genres,
    animes,
    tab,
    cardClick,
    filteredCards
  }
  return (
    <>
    <MainWrapper loadPosts={loadPosts} deletePost={deletePost} addPost={addPost} tabClick={tabClick} searchValue={searchValue}/>
    <Container {...propList} handleEdit = {handleEdit}/>
    </>
  );
}

export default App

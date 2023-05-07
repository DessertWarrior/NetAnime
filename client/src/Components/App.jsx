import React, { useState, useEffect } from 'react'
import MainWrapper from './MainWrapper'
import Container from './Container'
import {data, categories, selectCatagoryList} from '../Functions/fetchData.js'

function App() {
  const [card,setCard] = useState({});
  const [category,setCategory] = useState([]);
  const [genres,setGenres] = useState({});
  const [animes,setAnimes] = useState([]);
  const [animeContainer,setAnimeContainer] = useState([]);
    
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await data();
            
            setAnimeContainer(result);
            setAnimes(result);
            setCategory(await categories()); 
        }
        fetchData();
    },[])
    useEffect(()=>{console.log(genres)},[genres])
  const cardClick=(value)=>{
    setCard(value);
  }
  const loadPosts=()=>{
    setCard({});
    setAnimes(animeContainer)
  }
  const filteredCards= async (value)=>{
    const tempGenre = {...genres};

    if (!genres[value])
      tempGenre[value] = value;
    else
      delete tempGenre[value];
    
  setGenres(tempGenre);

  const fetchData = async ()=>{
    const result= await selectCatagoryList(tempGenre)
    console.log(tempGenre)
    setAnimes(result);
  }
  await  fetchData()
}

  const propList= {
    card,
    category,
    animes,
    cardClick,
    filteredCards
  }
  return (
    <>
    <MainWrapper loadPosts={loadPosts}/>
    <Container {...propList}/>
    </>
  );
}

export default App

import React,{useEffect,useState,Suspense} from 'react';
import RefinementMenu from "./GalleryList/CategoryTab/RefinementMenu";
import {
  data,
  categories
} from "../Functions/fetchData.js";
const Animes = React.lazy(() => import("./GalleryList/Animes"));
function Home(props) {
    const [anime, setAnime] = useState([]);
    const [animeContainer, setAnimeContainer] = useState([]);
    const [category, setCategory] = useState([]); //stores all category selection
    const [genres, setGenres] = useState({}); //stores selected catetory
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await data();
        setAnime(result);
        setAnimeContainer(result);
        setCategory(await categories());
      };
      fetchData();
      props.setCard({}); //clear the card Target
    }, []); //fetch anime and category data when component renders
    useEffect(() => {
      searchFilter();
    }, [props.searchword]); //search word filter
    useEffect(() => {
      genreFilter();
    }, [genres]); //updates animeContainer when genre is checked
  
    const searchFilter = ()=>{
      if (props.searchword != "") {
        //select all matches that matches the format.
        const filteredContainer = anime.filter((element) =>
          element.title
            .toLowerCase()
            .match(new RegExp(".*" + props.searchword.toLowerCase() + ".*"))
        ); //.* (zero to many character)
        setAnimeContainer(filteredContainer);
      } else setAnimeContainer(anime);
    }
    const genreFilter = () => {
      let regexGenres = Object.keys(genres);
      if (regexGenres.length == 0) setAnimeContainer(anime);
      else {
        let filteredContainer = anime.filter((element) => {
          return regexGenres.every((genre) => element.genres.includes(genre)); // every method returns true when all elements in genreList return true.
        });
        setAnimeContainer(filteredContainer);
      }
    };
    const filteredCards = async (value) => {
      const tempGenre = { ...genres };
      if (!genres[value]) tempGenre[value] = value; //if category checked
      else delete tempGenre[value]; //if unchecked remove a genre.
  
      setGenres(tempGenre);
    }; //event Listener for genre sort
  
    return (
      <>
        <div className="d-flex">
          {!props.tab ? null : (
            <RefinementMenu
              filteredCards={filteredCards}
              category={category}
              genres={genres}
            />
          )}
          <Suspense fallback={<div className="fs-1 text-white">Loading...</div>}>
            <Animes animes={animeContainer} />
          </Suspense>
        </div>
      </>
    );
  }
  export default Home;
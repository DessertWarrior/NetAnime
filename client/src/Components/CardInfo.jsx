import { useState, useEffect, useRef } from "react";
import Genres from "./Genres";
import EditCard from "./EditCard";

function CardInfo(props) {
  const [editMode, setEditMode] = useState(false);
  const [animeProfile,setAnimeProfile] = useState(props.movie)

  useEffect(() => {
    setAnimeProfile(props.movie);
  }, [props.movie]);

  const handleClick = () => {
    if (editMode) props.handleEdit(animeProfile);
    editMode ? setEditMode(false) : setEditMode(true);
  };
  const handleChange= (value)=>{
    setAnimeProfile({...animeProfile, [value[0]]:value[1]});
  }
  let message = "";
  if (animeProfile.score >= 7) message = "text-success";
  else if (animeProfile.score >= 4) message = "text-warning";
  else message = "text-danger";

  return (
    <>
      <li className="d-flex justify-content-center gap-5">
        <div
          id="content-wrapper"
          className="text-bg-dark  p-5 rounded d-flex position-relative"
        >
          <a
            className="position-absolute editBt m-4 fs-4"
            role="button"
            onClick={handleClick}
          >
            <i className={editMode ? "fas fa-save" : "fas fa-edit"}> {editMode? 'save' : 'edit'}</i>
          </a>
          <div className="image-container">
            <img className="rounded-4" src={animeProfile.image}></img>
          </div>

          <div className="d-flex">
            <div id="contents" className="">
              <h1 className="text-white card-title p-2 fw-bold text-break">
                {animeProfile.title}
              </h1>
              <div
                id="publish"
                className="d-flex mt-4 column-gap-2 align-items-center"
              >
                <h5 className="text-secondary card-title p-2">2023</h5>
                <h2 className="text-secondary">|</h2>
                <h5 className="ps-2 pe-2 pb-1 border border-secondary text-secondary text-break" style={{maxWidth: '100px'}}>
                  {animeProfile.source}
                </h5>
                <h2 className="text-secondary">|</h2>
                <h5 className="ms-2 text-secondary">Anime</h5>
              </div>
              <div className="mt-4">
                <h5 className="lh-base text-break">{animeProfile.synosis}</h5>
              </div>

              <h5 className="mt-5 text-secondary">
                Producer:{" "}
                <p className="ms-2 text-white text-break">{animeProfile.studio}</p>
              </h5>
              <h5 className="text-secondary ">
                Opening Music{" "}
                <p className="ms-2 text-white text-break">{animeProfile.opening}</p>
              </h5>
            </div>
            <div className="m-5 d-flex flex-column gap-2">
              <div
                id="animeScore"
                className="mt-5 mb-5 title text-secondary fs-3 border border-secondary ps-5 pe-5 p-3 align-self-start"
              >
                Score
                <h1 className={message + " fw-bold title"}>
                  {animeProfile.score}
                </h1>
              </div>{
                 Array.isArray(animeProfile.genres) ? <Genres genres={animeProfile.genres}/> : <Genres genres={animeProfile.genres.split(',')}/>
                }
            </div>
          </div>

          <h4></h4>

          
        </div>
        {editMode ? <EditCard movie={animeProfile} handleChange={handleChange}/> : null}
      </li>
    </>
  );
}
export default CardInfo;

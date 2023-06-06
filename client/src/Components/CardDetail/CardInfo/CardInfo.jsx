import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Genres from "./Genres";
import EditCard from "./EditCard";
import { postData } from "../../../Functions/fetchData";

function CardInfo(props) {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [animeProfile, setAnimeProfile] = useState(props.movie);

  useEffect(() => {
    setAnimeProfile(props.movie);
  }, [props.movie]);

  const handleEdit = async (value) => {
    const result = await postData(value);
    if (!result) {
      props.setShowAlert(true); //shows login alert
      props.setAuth(false); //resets login
      setAnimeProfile(props.movie); //revert back to the original
      const modal = document.getElementById('loginModal')
      if (modal) {    //if the component exist.
          const bootstrapModal = new window.bootstrap.Modal(modal);   //creating a new instance of Modal class
          bootstrapModal.show();
      }
      console.error("Unauthorized");
    }
    else navigate("/");
  };
  const handleClick = () => {
    if (editMode) handleEdit(animeProfile);
    editMode ? setEditMode(false) : setEditMode(true);
  };
  const handleChange = (value) => {
    setAnimeProfile({ ...animeProfile, [value[0]]: value[1] });
  };
  // set score text color
  let message = "";
  if (animeProfile.score >= 7) message = "text-success";
  else if (animeProfile.score >= 4) message = "text-warning";
  else message = "text-danger";
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>
      {props.showAlert ? (
        <div
          className="alert alert-danger position-absolute d-flex align-items-center"
          style={{ width: "100%", zIndex: 1}}
          id='loginAlert'
        >
          <svg
            className="bi flex-shrink-0 me-2"
            role="img"
            aria-label="Danger:"
            style={{ height: "20px", width: "20px" }}
          >
            <use xlinkHref="#exclamation-triangle-fill" />
          </svg>
          <div>Please login to continue...</div>
          <button type="button" className="btn-close" data-bs-dismiss="#loginAlert" aria-label="Close" onClick={()=>props.setShowAlert(false)}></button>
        </div>
      ) : null}
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
            <i className={editMode ? "fas fa-save" : "fas fa-edit"}>
              {" "}
              {editMode ? "save" : "edit"}
            </i>
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
                <h5
                  className="ps-2 pe-2 pb-1 border border-secondary text-secondary text-break"
                  style={{ maxWidth: "100px" }}
                >
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
                <p className="ms-2 text-white text-break">
                  {animeProfile.studio}
                </p>
              </h5>
              <h5 className="text-secondary ">
                Opening Music{" "}
                <p className="ms-2 text-white text-break">
                  {animeProfile.opening}
                </p>
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
              </div>
              {Array.isArray(animeProfile.genres) ? (
                <Genres genres={animeProfile.genres} />
              ) : (
                <Genres genres={animeProfile.genres.split(",")} />
              )}
            </div>
          </div>

          <h4></h4>
        </div>
        {editMode ? (
          <EditCard movie={animeProfile} handleChange={handleChange} />
        ) : null}
      </li>
    </>
  );
}
export default CardInfo;

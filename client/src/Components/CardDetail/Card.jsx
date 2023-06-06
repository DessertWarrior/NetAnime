import {cardData} from "../../Functions/fetchData.js";
import React, { useEffect, Suspense } from "react";
import {
    useParams,
    Navigate,
    useNavigate
  } from "react-router-dom";
const CardInfo = React.lazy(() => import("./CardInfo/CardInfo")); //lazy loading the component, and so that this component is loding synchrously, it will let other component to render first

function Card(props) {
    const nav = useNavigate();
    const { id } = useParams();
    if (isNaN(id)) return <Navigate to="/error" />; //navigate back to the * path
  
    useEffect(() => {
      async function fetchData() {
        try {
          props.setCard(await cardData(id));
        } catch (error) {
          console.error("Error fetching data:", error);
          nav('/error');
        }
      }
      fetchData();
    }, [id]); //once id is assigned to a value.
    return (
      <>
        <Suspense fallback={<div className="fs-1 text-white">Loading...</div>}>
          {props.card.id && <CardInfo setAuth={props.setAuth} movie={props.card} showAlert={props.showAlert} setShowAlert={props.setShowAlert}/>}
        </Suspense>
      </>
    );
  }
  export default Card;
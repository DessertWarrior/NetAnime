import React, { Suspense, useEffect, useState } from "react";
import Home from './Home'
import Card from './CardDetail/Card'
import MainWrapper from "./MainWrapper/MainWrapper";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
const CardInfo = React.lazy(() => import("./CardDetail/CardInfo/CardInfo")); //lazy loading the component, and so that this component is loding synchrously, it will let other component to render first

function Container(props) {
  const [card, setCard] = useState({});
  const [searchword, setSearchWord] = useState("");
  const [tab, setTab] = useState(false);
  const [showAlert,setShowAlert] = useState(false);

  useEffect(() => {
    console.log(card);
  }, [card]);
  useEffect(()=>{
    console.log(showAlert)
  },[showAlert])
  /*=================================================*/
  const propList = {
    card,
    tab,
    searchword,
    setSearchWord,
    setCard,
    setTab,
  };
  return (
    <>
      <Router>
        <MainWrapper
          setTab={setTab}
          searchValue={setSearchWord}
          auth={props.auth}
          setAuth={props.setAuth}
          card={card}
          setShowAlert={setShowAlert}
        />
        <Routes>
          <Route
            path="/"
            element={<Home {...propList} errorElement={<ErrorPage />} />}
          ></Route>
          <Route
            path="/new"
            element={
              <Suspense
                fallback={<div className="fs-1 text-white">Loading...</div>}
              >
                <CardInfo
                  movie={{
                    title: "",
                    synosis: "",
                    image: "",
                    studio: "",
                    source: "",
                    theme: "",
                    score: "",
                    opening: "",
                    genres: "",
                  }}
                  setCard={setCard}
                  showAlert={showAlert}
                  setShowAlert={setShowAlert}
                  setAuth={props.setAuth}
                />
              </Suspense>
            }
          ></Route>
          <Route
            path="/anime/:id"
            element={
              <Card
                card={card}
                setCard={setCard}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                setAuth={props.setAuth}
              />
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Container;

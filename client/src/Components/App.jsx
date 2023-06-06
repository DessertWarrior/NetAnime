import React, { useState, useEffect } from "react";

import Container from "./Container";
import LoginModal from "./LoginModal/LoginModal";

function App() {
  const [auth,setAuth] = useState(document.cookie.split(';').find(element=>element.startsWith('jwt=')));
  const setUser = (value)=>{
      setAuth(value)
  }
  return (
    <>
      <Container auth={auth} setAuth={setUser}/>
      {/* Modal */}
      <LoginModal auth={auth} setAuth={setUser}/>
    </>
  );
}

export default App;

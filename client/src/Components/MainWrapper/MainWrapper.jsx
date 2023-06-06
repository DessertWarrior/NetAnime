import ToolWrapper from "./ToolWrapper";
import Title from "./Title";
function MainWrapper(props) {
  return (
    <nav className="bg-black p-2 d-flex sticky-top justify-content-between align-items-center">
      <div className="d-flex">
        <i
          className="fas fa-bars fs-2 text-white p-2 "
          role="button"
          onClick={
            ()=>{props.setTab((tab)=>!tab)} //assign arrow function so that tab updates synchronuously
          } 
        ></i>
        <Title />
      </div>

      <ToolWrapper
        searchValue={props.searchValue}
        auth = {props.auth}
        card = {props.card}
        setShowAlert = {props.setShowAlert}
        setAuth={props.setAuth}
      />
    </nav>
  );
}
export default MainWrapper;

import { useEffect, useState } from "react";
import Category from "./Collapse/Category";

function RefinementMenu(props) {
  const [collapses, setCollapses] = useState(true);
  const handleCollapse = (event) => {
    collapses ? setCollapses(false) : setCollapses(true);
  };

  return (
    <div className={`animate__animated bg-dark p-3 show`} id="refinementMenu">
      <h3 className="text-danger fw-bold ps-2 pt-4 pe-5">Catagory</h3>
      <div
        className=""
        data-bs-toggle="collapse"
        data-bs-target="#categoryList"
        aria-expanded="false"
        aria-controls="categoryList"
        onClick={handleCollapse}
      >
        <i
          className={collapses ? "fas fa-angle-right" : "fas fa-chevron-down"}
        ></i>
      </div>

      {props.category.map((element, index) => (
        <Category
          category={element}
          key={index}
          filteredCards={props.filteredCards}
          genres={props.genres}
        />
      ))}
    </div>
  );
}
export default RefinementMenu;

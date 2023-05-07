function Category(props){
    const handleClick= ()=>{
        props.filteredCards(props.category)
    }
    return (
        <div className="collapse form-check" id="categoryList">
            <input className="form-check-input me-5 " type="checkbox" value={props.category} id="flexCheckDefault" onClick={handleClick}></input>
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">{props.category}</label>
        </div>  
    );
}
export default Category;
function Category(props){
    console.log(props.genres)
    let checked;
    if (!props.genres[props.category])
        checked = false;
    else
        checked = true;

    const handleClick= ()=>{
        props.filteredCards(props.category)
    }
    return (
        <div className="collapse form-check" id="categoryList">
            <input className="form-check-input me-3 " type="checkbox" value={props.category} id="flexCheckDefault" onChange={handleClick} checked={checked}></input>
            <h1 className="text-start form-check-label text-white fs-5 text-break" htmlFor="flexCheckDefault">{props.category}</h1>
        </div>  
    );
}
export default Category;
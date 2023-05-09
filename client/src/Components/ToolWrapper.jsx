import 'animate.css';

function ToolWrapper(props)
{
    const handleChange = (event)=>{
        props.searchValue(event.target.value)
    }
    return (
        
        <nav className="tool-wrapper d-flex column-gap-4">
            <i className="fa fa-plus" aria-hidden="true" onClick={props.addPost}></i>
            <i className="fa fa-trash" aria-hidden="true" onClick={props.deletePost}></i>
            <i className="fa fa-search" data-bs-toggle="collapse"  data-bs-target="#searchBar" aria-expanded="false" aria-controls="searchBar"></i>
            <div className="collapse collapse-horizontal" aria-expanded="false" data-bs-toggle="collapse" id="searchBar">
                <input type="search" placeholder="search..." onChange={handleChange}></input>
            </div>
            
            <button className="btn btn-outline-danger me-5" type="submit" >Login</button>

        </nav>
    );
}
export default ToolWrapper;
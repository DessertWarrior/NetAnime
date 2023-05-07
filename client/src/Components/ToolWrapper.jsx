function ToolWrapper()
{
    return (
        <nav className="tool-wrapper d-flex column-gap-4">
            <i className="fa fa-plus" aria-hidden="true"></i>
            <i className="fa fa-trash" aria-hidden="true"></i>
            <i className="fa fa-search" data-bs-toggle="collapse"  data-bs-target="#searchBar" aria-expanded="false" aria-controls="searchBar"></i>
            <div className="collapse collapse-horizontal" aria-expanded="false" data-bs-toggle="collapse" id="searchBar">
                <input type="search" placeholder="search..." ></input>
            </div>
            
            <button className="btn btn-outline-danger me-5" type="submit">Login</button>

        </nav>
    );
}
export default ToolWrapper;
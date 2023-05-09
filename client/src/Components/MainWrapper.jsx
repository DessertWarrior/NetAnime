import ToolWrapper from './ToolWrapper';
import Title from './Title';
function MainWrapper(props){
    return (
        <nav className= "bg-black p-2 d-flex sticky-top justify-content-between align-items-center" >
        <div className="d-flex">
            <i className="fas fa-bars fs-2 text-white p-2 " role='button' onClick={props.tabClick}/*data-bs-toggle="collapse" data-bs-target="#refinementMenu" aria-expanded="false" aria-controls="refinementMenu"*/></i>
            <Title loadPosts={props.loadPosts}/>
        </div>
        
        <ToolWrapper addPost={props.addPost} deletePost={props.deletePost} searchValue={props.searchValue}/>
        </nav>
    );
}
export default MainWrapper;
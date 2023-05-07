import ToolWrapper from './ToolWrapper';
import Title from './Title';
function MainWrapper(props){
    return (
        <nav className= "bg-black p-2 d-flex sticky-top justify-content-between align-items-center" >
        <Title loadPosts={props.loadPosts}/>
        <ToolWrapper />
        </nav>
    );
}
export default MainWrapper;
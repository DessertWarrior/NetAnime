import { useEffect,useState } from 'react'
import Category from './Category'

function RefinementMenu(props){
    const [collapses,setCollapses] = useState(true);
    const [selectedCateGory,setSelectedCategory]= useState([]);
    const handleCollapse = (event)=>{
        collapses ? setCollapses(false) : setCollapses(true)
    }

    return (
        <div className='refinementMenu bg-dark'>
            <h1 className="text-white">
                Catagory
            </h1>
            <div data-bs-toggle="collapse" data-bs-target="#categoryList" aria-expanded="false" aria-controls="categoryList" onClick={handleCollapse}>
                <i className={collapses? "fas fa-angle-right" : "fas fa-chevron-down"}></i>
            </div>
            
            {props.category.map((element,index)=>(
                <Category category={element} key={index} filteredCards={props.filteredCards}/>
            ))}
        </div>
        )
}
export default RefinementMenu;
import Animes from './Animes'
import CardInfo from './CardInfo'
import RefinementMenu from './RefinementMenu'

function Container(props){
    console.log(props.genres)
    // props.card.title != null defines all the null and undefined values, but not others.
    return (
        <>
        {props.card.title != null ? 
            (<CardInfo movie={props.card} handleEdit = {props.handleEdit}/>) 
            : 
            (<div className='d-flex'>
            {!props.tab? null :<RefinementMenu filteredCards= {props.filteredCards} category={props.category} genres={props.genres}/>}
            <Animes animes={props.animes} cardClick={props.cardClick}/>
            </div>)
        }
            
        </>
    )
}
export default Container;
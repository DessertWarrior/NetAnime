import Animes from './Animes'
import CardInfo from './CardInfo'
import RefinementMenu from './RefinementMenu'

function Container(props){
    return (
        <>
        {props.card.title? <CardInfo movie={props.card}/> : 
            (<div className='d-flex'>
            <RefinementMenu filteredCards= {props.filteredCards} category={props.category}/>
            <Animes animes={props.animes} cardClick={props.cardClick}/>
            </div>)
        }
            
        </>
    )
}
export default Container;
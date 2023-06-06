import {Link} from 'react-router-dom';
const Anime=(props)=>{
    return (
            <li className="cardItem d-flex text-bg-dark align-items-center flex-column p-3 " role="button">
            <Link to={`/anime/${props.anime.id}`}><img className="rounded-4" src={props.anime.image}></img></Link>
            <p className="text-white card-title p-2 fs-4 text-center" style={{width:'330px'}}>{props.anime.title}</p>
         </li>
        
    );
}
export default Anime;
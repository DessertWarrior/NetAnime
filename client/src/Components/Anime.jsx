const Anime=(props)=>{
    const cardEvent = ()=>{
        props.cardClick(props.anime);
    }
    return (
        <li className="cardItem d-flex text-bg-dark align-items-center flex-column p-3 " role="button" onClick={cardEvent}>
            <img className="rounded-4" src={props.anime.image}></img>
            <h4 className="text-white card-title p-2">{props.anime.title}</h4>
        </li>
    );
}
export default Anime;
function CardInfo(props){
    console.log(props.movie)
    return (
        <li className="d-flex text-bg-dark border-start p-2 rounded" role="button">
            <div className="image-container">
                <img className="rounded-4" src={props.movie.image}></img>
            </div>

            <h4 className="text-white card-title p-2 fw-bold fs-1">{props.movie.title}</h4>
            <h4 className="text-white card-title p-2">{props.movie.title}</h4>
        </li>
    );
}
export default CardInfo
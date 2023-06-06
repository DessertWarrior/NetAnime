function Genres(props){
    return (
        <>
            {props.genres.map((element, index)=> (
            <h4
              className="btn btn-outline-secondary align-self-center"
              key={index}
            >
              {element}
            </h4>
            ))
          }
        

       </>
    )
}
export default Genres;
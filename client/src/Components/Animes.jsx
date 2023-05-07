import Anime from './Anime'
function Animes(props)
{
    return (
    <ul className='contents d-flex column-gap-2 row-gap-2 flex-wrap'>
        {props.animes.map((element,index)=>(
            <Anime anime={element} key={index} cardClick={props.cardClick}/>
        ))}
    </ul>
    );
}
export default Animes;
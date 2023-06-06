import Anime from "./Anime";
function Animes(props) {
  return (
    <ul className="contents d-flex column-gap-3 row-gap-5 flex-wrap ">
      {props.animes.map((element, index) => (
        <Anime anime={element} key={index} />
      ))}
    </ul>
  );
}
export default Animes;

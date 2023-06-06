import { Link } from "react-router-dom";
function Title(props) {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="text-danger title p-1 ms-3" role="button">
        <h1>
          <strong>NetAnime</strong>
        </h1>
      </div>
    </Link>
  );
}
export default Title;

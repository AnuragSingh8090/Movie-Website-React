import { Link } from "react-router-dom";
import "./Card.css";
import NoImage from "./no-photo-card.jpg";

function Card(props) {
  // Determine the route prefix based on content type
  const routePrefix = props.type === "Movie" ? "/movie" : "/series";
  const movieId = props.link.replace("/", ""); // Remove the leading slash
  const type = props.type === "Movie" ? "M" : "S";

  return (
    <div className="movie_card">
      <img
        src={props.imgSrc}
        alt="movie_image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = NoImage;
        }}
      />
      <div className="movieInfo">
        <div className="movie_name">{props.name}</div>
        <div className="movie_year">{props.year}</div>
        <div className="movie_type">
          {props.type === "Movie" ? "Movie" : "Series"}
        </div>
        <div className="movie_language">{props.language}</div>

        <Link to={`${routePrefix}/${movieId}+${type}`}>
          <button type="submit" className="downloadBtn">
            Watch Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;

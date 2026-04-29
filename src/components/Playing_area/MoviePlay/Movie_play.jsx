import React, { useState, useEffect } from "react";
import "./Movie_play.css";
import ReactLoading from "react-loading";
import MovieDetail from "./MovieDetails/MovieDetail";
import SeriesDetail from "./SeriesDetails/SeriesDetail";
import { options, baseUrl } from "../../../api/apiConfig";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function Movie_play() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function goBack() {
    navigate(-1);
  }

  function separateID(str) {
    const numberMatch = str.match(/\d+/);
    const letterMatch = str.match(/[A-Za-z]+/);
    const movieID = numberMatch ? numberMatch[0] : null;
    const movieType = letterMatch ? letterMatch[0] : null;
    return { movieID, movieType };
  }

  // Handle both movieId and seriesId parameters
  const movieParam = params.movieId || params.seriesId;
  
  // Check if we have a parameter
  if (!movieParam) {
    console.error("No movie parameter found");
    return (
      <div className="movieplay_container flex">
        <div className="backBtn" onClick={goBack}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </div>
        <div>Error: Movie not found</div>
      </div>
    );
  }
  
  const { movieID, movieType } = separateID(movieParam);

  useEffect(() => {
    const getMovieData = async (type) => {
      try {
        const url = `${baseUrl}/${type}/${movieID}?language=en-US`;
        console.log("Fetching movie data from:", url);
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const detailData = await response.json();
        console.log("Movie data received:", detailData);
        setMovie(detailData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setMovie(null);
      }
    };

    if (movieID && movieType) {
      if (movieType === "S") {
        getMovieData("tv");
      } else if (movieType === "M") {
        getMovieData("movie");
      } else {
        console.error("Unknown movie type:", movieType);
      }
    }
  }, [movieID, movieType]);

  return (
    <div className="movieplay_container flex">
      <div className="backBtn" onClick={goBack}>
        <i className="fa-solid fa-arrow-left-long"></i>
      </div>
      {movie ? (
        <>
          {movieType === "M" ? (
            <MovieDetail props={movie} />
          ) : movieType === "S" ? (
            <SeriesDetail props={movie} />
          ) : (
            <div>Error: Unknown content type</div>
          )}
        </>
      ) : movieID && movieType ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#9b59b6"}
          height={80}
          width={80}
        />
      ) : (
        <div>Error: Invalid movie ID or type</div>
      )}
    </div>
  );
}

export default Movie_play;

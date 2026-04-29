import React, { useState, useEffect, useRef } from "react";
import { posterUrl, fetchApi, trailerKey } from "../../../../api/apiConfig";
import "./SeriesDetails.css";
import SeasonInfo from "./SeasonInfo";
import ReactLoading from "react-loading";

const MovieDetail = ({ props }) => {
  const [imageKey, setImageKey] = useState(Date.now());
  const [showPlay, setShowPlay] = useState(false);
  const [showSeason, setShowSeason] = useState(false);
  const [trailer, setTrailer] = useState();
  
  // Ref to track iframe for proper cleanup
  const iframeRef = useRef(null);
  
  const updateShow = () => setShowSeason((prev) => !prev);
  const closeSeason = () => setShowSeason(false);

  function getTrailer() {
    const url = `/tv/${props.id}/videos?language=en-US`;
    fetchApi(url).then((res) => {
      setTrailer(trailerKey(res));
    });
  }

  // Cleanup function to stop YouTube player
  const stopYouTubePlayer = () => {
    if (iframeRef.current) {
      // Reset iframe src to stop the video
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = '';
      // Small delay to ensure the video stops, then restore src for future use
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = currentSrc;
        }
      }, 100);
    }
  };

  const hideTrailerPlay = () => {
    stopYouTubePlayer(); // Stop the video before hiding
    setShowPlay(false);
    setTrailer(null);
  };
  
  const showTrailerPlay = () => {
    setShowPlay(true);
  };
  
  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      stopYouTubePlayer();
    };
  }, []);
  
  getTrailer();
  useEffect(() => {
    setImageKey(Date.now());
  }, [props.backdrop_path, props.poster_path]);

  return (
    <>
      <img
        key={imageKey}
        src={posterUrl + props.backdrop_path}
        className="poster_img"
        alt="movie_poster"
      />
      <div className="bigCard_wrapper flex">
        <div className="cDetails">
          <div className="movieName">{props.name}</div>
          <div className="movieGenere">
            {props.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <div className="movieRelease flex">
            <i className="fa-solid fa-calendar-days"></i>
            <span>{props.first_air_date}</span>
          </div>
          <div className="movieDuration flex">
            <span>{props.seasons.length}</span>
            <span>Seasons</span>
          </div>
          <div className="movieRating flex">
            <i className="fa-regular fa-star"></i>
            <span>
              {parseFloat(props.vote_average.toFixed(1))}/10
              {` (${props.vote_count})`}
            </span>
          </div>
          <div className="movieStory">{props.overview}</div>
          <div className="buttonSection flex">
            <button
              type="button"
              className="btn btn-danger"
              onClick={updateShow}
            >
              Watch Now
            </button>
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={showTrailerPlay}
            >
              Watch Trailer
            </button>
          </div>
        </div>
        <div className="bigCard" onClick={updateShow}>
          <img
            key={imageKey}
            src={posterUrl + props.poster_path}
            alt="movie_image"
          />
        </div>
        <div
          id="trailerContainer"
          className={showPlay ? "showContainer" : "hideContainer"}
        >
          <i
            className="fa-solid fa-x"
            id="crossIcon"
            onClick={hideTrailerPlay}
          ></i>

          {trailer === null ? (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#9b59b6"}
              height={80}
              width={80}
            />
          ) : trailer === undefined ? (
            "Trailer not found !!"
          ) : (
            <iframe
              ref={iframeRef}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer.key}?rel=0&modestbranding=1&enablejsapi=1`}
              title={trailer.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
        {showSeason && (
          <SeasonInfo
            class={showSeason ? "season_show" : "season_hide"}
            seasonData={props.seasons}
            seriesId={props.id}
            seriesName={props.name}
            closeShow={closeSeason}
          />
        )}
      </div>
    </>
  );
};

export default MovieDetail;

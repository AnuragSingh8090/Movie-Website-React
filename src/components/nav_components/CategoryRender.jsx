import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import ReactLoading from "react-loading";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SkeletonLoader from "../Skeleton/SkeletonLoader";
import NoResults from "../NoResults/NoResults";
import {
  options,
  posterUrl,
  checkMovieType,
  getLanguageName,
} from "../../api/apiConfig";

function CategoryRender(props) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const getMovieData = async (pageNumber = 1) => {
    const url = `${props.url}&page=${pageNumber}`;
    try {
      setLoading(true);
      setError("");
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Error connecting to servers !!");
      }

      const data = await response.json();

      setPage(data.page);
      setMovie(data.results || []);
      setTotalPage(data.total_pages || 0);
      
      // Set initialLoad to false after first successful load
      if (initialLoad) {
        setInitialLoad(false);
      }
    } catch (error) {
      if (error.message === "Failed to fetch") {
        setError("Please connect to the internet !!");
      } else {
        setError(error.message);
      }
      setMovie([]);
      setTotalPage(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset page to 1 and set initialLoad when URL changes (new search/category)
    setPage(1);
    setInitialLoad(true);
  }, [props.url]);

  useEffect(() => {
    // Fetch data whenever page changes
    getMovieData(page);
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="working_area">
      <center className="cards-title">{props.title}</center>
      <div className="card-container">
        {loading ? (
          initialLoad ? (
            <SkeletonLoader count={20} />
          ) : (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#9b59b6"}
              height={80}
              width={80}
            />
          )
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : movie.length === 0 ? (
          <NoResults 
            title="No Movies Found"
            message={props.title.includes("Search") 
              ? "We couldn't find any movies matching your search. Try different keywords or browse our categories."
              : "No movies available in this category at the moment. Please try again later."
            }
            showSuggestions={props.title.includes("Search")}
            showActions={!props.title.includes("Search")}
          />
        ) : (
          movie.map((movie) => (
            <Card
              key={movie.id}
              name={movie.original_title || movie.original_name}
              type={checkMovieType(movie)}
              year={movie.first_air_date || movie.release_date}
              language={getLanguageName(movie.original_language)}
              imgSrc={`${posterUrl}${movie.poster_path}`}
              link={`/${movie.id}`}
            />
          ))
        )}
      </div>
      {!loading && !error && movie.length > 0 && totalPage > 1 && (
        <div className="pageNumWrapper flex">
          <Stack spacing={2} className="custom-pagination">
            <Pagination
              count={totalPage}
              page={page}
              onChange={handlePageChange}
              shape="rounded"
              defaultPage={1}
              siblingCount={0}
            />
          </Stack>
        </div>
      )}
    </div>
  );
}

export default CategoryRender;

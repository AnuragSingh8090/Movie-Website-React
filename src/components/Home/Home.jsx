import React, { useState, Suspense, lazy } from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ReactLoading from "react-loading";

// Preload the Trending component since it's the default route
import { Trending } from "../nav_components/NavComponents";

// Lazy load other components
const PlayingArea = lazy(() => import("../Playing_area/Playing_area"));
const Error = lazy(() => import("../nav_components/Error"));
const Movies = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.Movies })));
const TvShows = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.TvShows })));
const LatestMovies = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.LatestMovies })));
const SearchResult = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.SearchResult })));
const Horror = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.Horror })));
const ScienceFiction = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.ScienceFiction })));
const Thriller = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.Thriller })));
const Romance = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.Romance })));
const Crime = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.Crime })));
const Animation = lazy(() => import("../nav_components/NavComponents").then(module => ({ default: module.Animation })));
const Home = () => {
  const [searchData, setSearchData] = useState("");
  
  function checkSomething(search) {
    setSearchData(search);
  }

  // Simple loading fallback component - no skeleton cards to avoid double loading
  const LoadingFallback = () => (
    <div className="working_area">
      <div className="card-container" style={{ justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <ReactLoading
          type={"spinningBubbles"}
          color={"#9b59b6"}
          height={80}
          width={80}
        />
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <Navbar check={checkSomething} />
      <Routes>
        {/* Home route uses preloaded Trending component - no Suspense needed */}
        <Route path="/" element={<Trending />} />
        
        {/* Other routes use Suspense for lazy loading */}
        <Route path="/movie" element={
          <Suspense fallback={<LoadingFallback />}>
            <Movies />
          </Suspense>
        } />
        <Route path="/series" element={
          <Suspense fallback={<LoadingFallback />}>
            <TvShows />
          </Suspense>
        } />
        <Route path="/latest_movies" element={
          <Suspense fallback={<LoadingFallback />}>
            <LatestMovies />
          </Suspense>
        } />
        <Route path="/horror/:type" element={
          <Suspense fallback={<LoadingFallback />}>
            <Horror />
          </Suspense>
        } />
        <Route path="/science_fiction/:type" element={
          <Suspense fallback={<LoadingFallback />}>
            <ScienceFiction />
          </Suspense>
        } />
        <Route path="/thriller/:type" element={
          <Suspense fallback={<LoadingFallback />}>
            <Thriller />
          </Suspense>
        } />
        <Route path="/romance/:type" element={
          <Suspense fallback={<LoadingFallback />}>
            <Romance />
          </Suspense>
        } />
        <Route path="/crime/:type" element={
          <Suspense fallback={<LoadingFallback />}>
            <Crime />
          </Suspense>
        } />
        <Route path="/animation/:type" element={
          <Suspense fallback={<LoadingFallback />}>
            <Animation />
          </Suspense>
        } />
        <Route path="/search" element={
          <Suspense fallback={<LoadingFallback />}>
            <SearchResult search={searchData} />
          </Suspense>
        } />
        <Route path="/movie/:movieId" element={
          <Suspense fallback={<LoadingFallback />}>
            <PlayingArea />
          </Suspense>
        } />
        <Route path="/series/:seriesId" element={
          <Suspense fallback={<LoadingFallback />}>
            <PlayingArea />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingFallback />}>
            <Error />
          </Suspense>
        } />
      </Routes>
    </>
  );
};

export default Home;

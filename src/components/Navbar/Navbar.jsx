import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import "./Navbar.css";

function Navbar(props) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  
  // Debounce search input with 500ms delay
  const debouncedSearchTerm = useDebounce(input, 500);

  // Effect for debounced search
  useEffect(() => {
    if (debouncedSearchTerm) {
      props.check(debouncedSearchTerm);
    } else {
      // Clear search when input is empty
      props.check("");
    }
  }, [debouncedSearchTerm, props]);

  const toggleNavbarVisibility = () => {
    setIsNavbarVisible(true);
  };

  const hideNavbar = () => {
    setIsNavbarVisible(false);
  };

  const updateInput = (event) => {
    const value = event.target.value;
    setInput(value);
    // Remove immediate props.check call - now handled by debounced effect
  };

  const getInput = () => {
    const value = input.trim();
    if (value) {
      props.check(value);
      navigate("/search");
    }
  };

  const runSearch = (event) => {
    if (event.key === "Enter") {
      const value = input.trim();
      if (value) {
        props.check(value);
        navigate("/search");
      }
    }
  };

  return (
    <div className="navbar-container">
      <ul id="navbar" className={isNavbarVisible ? "visible" : ""}>
        <NavLink to="/" onClick={hideNavbar}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/movie" onClick={hideNavbar}>
          <li>Movies</li>
        </NavLink>
        <NavLink to="/series" onClick={hideNavbar}>
          <li>Series</li>
        </NavLink>
        <NavLink to="/latest_movies" onClick={hideNavbar}>
          <li>Latest Movies</li>
        </NavLink>
        <NavLink to="/horror/movies" onClick={hideNavbar}>
          <li>Horror</li>
        </NavLink>
        <NavLink to="/science_fiction/movies" onClick={hideNavbar}>
          <li>Science Fiction</li>
        </NavLink>
        <NavLink to="/thriller/movies" onClick={hideNavbar}>
          <li>Thriller</li>
        </NavLink>
        <NavLink to="/romance/movies" onClick={hideNavbar}>
          <li>Romance</li>
        </NavLink>
        <NavLink to="/crime/movies" onClick={hideNavbar}>
          <li>Crime</li>
        </NavLink>
        <NavLink to="/animation/movies" onClick={hideNavbar}>
          <li>Animation</li>
        </NavLink>

        <i className="fa-solid fa-x" id="crossIcon" onClick={hideNavbar}></i>
      </ul>
      <i
        className="fa-solid fa-bars"
        id="menuBar"
        onClick={toggleNavbarVisibility}
      ></i>
      <section className="searchSection">
        <div className="search-bar-container">
          <input
            type="text"
            id="search"
            placeholder="Search"
            value={input}
            onChange={updateInput}
            onKeyDown={runSearch}
          />
          <Link to="/search">
            <i className="fa-solid fa-magnifying-glass" onClick={getInput}></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Navbar;

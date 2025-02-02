import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import "./Dashboard.css";
import UserContainer from "./UserContainer";
import { useDispatch, useSelector } from "react-redux";
import { setUser, updateSearchHistory } from "../redux/reducer";

function Dashboard() {
  const user = useSelector((state) => state.user);
  const searchInput = useRef();
  const dispatch = useDispatch();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const searchTerm = searchInput.current.value;
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data.items[0] ? data.items[0] : {}));
        dispatch(
          updateSearchHistory({
            searchTerm,
            user: data.items[0] ? data.items[0] : {},
          })
        );
      } else {
        dispatch(setUser({}));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-page">
      <div className="search-form">
        <p>Search GitHub User</p>
        <form onSubmit={handleSubmitForm}>
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              ref={searchInput}
            />
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      {user && user.id ? (
        <div className="search-results">
          <p>Search Results:</p>
          <div className="user">
            <UserContainer user={user} />
          </div>
        </div>
      ) : (
        user && <h3>No Results Found</h3>
      )}
    </div>
  );
}

export default React.memo(Dashboard);

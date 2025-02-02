import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./History.css";
import UserContainer from "./UserContainer";
import { clearSearchHistory } from "../redux/reducer";

function History() {
  const searchHistory = useSelector((state) => state.searchHistory);
  const dispatch = useDispatch();

  return (
    <div className="history-page">
      {searchHistory?.length ? (
        <>
          <p className="title">Your Search History</p>
          <div className="history-table">
            <div className="history-table-header">
              <span>Search Term</span>
              <span>Search Results</span>
            </div>
            {searchHistory.map(({ searchTerm, user }, index) => {
              return (
                <div className="history-table-data" key={index}>
                  <p className="user-name">{searchTerm}</p>
                  {user.id ? (
                    <UserContainer user={user} />
                  ) : (
                    <p>Search result not found!</p>
                  )}
                </div>
              );
            })}
          </div>
          <div>
            <button
              className="clear-history-button"
              onClick={() => dispatch(clearSearchHistory())}
            >
              Clear Search History
            </button>
          </div>
        </>
      ) : (
        <h2>No History</h2>
      )}
    </div>
  );
}

export default History;

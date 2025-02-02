import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import Dashboard from "./Dashboard";
import History from "./History";
import "./Header.css";

export default function Header() {
  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            History
          </NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

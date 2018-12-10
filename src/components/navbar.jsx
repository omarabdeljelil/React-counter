import React, { Component } from "react";

// stateless functional componenet
const NavBar = ({ totalCounters, allCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Total active counters:{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;

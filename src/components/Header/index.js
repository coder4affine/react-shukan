import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const index = props => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
            to="/details/"
          >
            Details
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
            to="/about/"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

index.propTypes = {};

export default index;

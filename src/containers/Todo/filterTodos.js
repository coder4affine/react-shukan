import React from "react";
import PropTypes from "prop-types";

const filterTodos = ({ filterTodo }) => {
  return (
    <div>
      <button onClick={() => filterTodo("all")}>All</button>
      <button onClick={() => filterTodo("pending")}>Pending</button>
      <button onClick={() => filterTodo("completed")}>Completed</button>
    </div>
  );
};

filterTodos.propTypes = {};

export default filterTodos;

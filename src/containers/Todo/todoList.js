import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";
import TodoListItem from "./todoListItem";

const todoList = ({ todos, completeTask, deleteTask }) => {
  console.log("todoList");
  return (
    <Fragment>
      {todos.map(item => (
        <TodoListItem
          key={item.id}
          item={item}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </Fragment>
  );
};

todoList.propTypes = {};

export default memo(todoList);

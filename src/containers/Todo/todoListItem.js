import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const TodoListItem = ({ item, completeTask, deleteTask }) => {
  return (
    <div
      style={{
        ...styles.flex,
        ...styles.row,
        width: "100%",
        padding: 10,
        alignItems: "center"
      }}
    >
      <input
        name={`checkbox${item.id}`}
        type="checkbox"
        value={item.isDone}
        defaultChecked={item.isDone}
        onClick={() => completeTask(item.id)}
      />
      <span
        style={{
          display: "flex",
          flex: 1,
          padding: "0 10px",
          textDecoration: item.isDone ? "line-through" : "none"
        }}
      >
        {item.todo}
      </span>
      <button onClick={() => deleteTask(item.id)}>Delete</button>
    </div>
  );
};

TodoListItem.propTypes = {};

export default memo(TodoListItem);

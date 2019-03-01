import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const todoForm = ({ addTodo, todo, onChange, error }) => {
  console.log("todoForm");
  return (
    <form onSubmit={addTodo}>
      <div style={{ ...styles.flex, ...styles.row }}>
        <div style={styles.column}>
          <input
            style={{ height: 24 }}
            name="todo"
            type="text"
            placeholder="Write your To-D0"
            value={todo}
            onChange={onChange}
          />
          {error && <span style={styles.error}>{error}</span>}
        </div>
        <input style={{ height: 30 }} type="submit" value="Add Todo" />
      </div>
    </form>
  );
};

todoForm.propTypes = {};

export default memo(todoForm);

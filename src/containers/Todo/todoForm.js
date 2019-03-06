import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const todoForm = React.forwardRef(({ addTodo, todo, onChange, error }, ref) => {
  return (
    <form onSubmit={addTodo}>
      <div style={{ ...styles.flex, ...styles.row }}>
        <div style={styles.column}>
          <input
            ref={ref}
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
});

todoForm.defaultProps = {
  todo: ""
};

todoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todo: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default memo(todoForm);

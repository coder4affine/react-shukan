import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import styles from "./styles";

class index extends PureComponent {
  state = {
    todo: "",
    error: "",
    todos: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
  };

  completeTask = id => {
    const { todos } = this.state;
    const index = todos.findIndex(x => x.id === id);
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isDone: !todos[index].isDone },
      ...todos.slice(index + 1)
    ];
    this.setState({ todos: newTodos });
  };

  deleteTask = id => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(x => x.id !== id) });
  };

  addTodo = e => {
    e.preventDefault();
    const { todo, todos } = this.state;
    if (!todo) {
      this.setState({ error: "Required" });
      return;
    }
    this.setState({
      todos: [...todos, { id: new Date().valueOf(), todo, isDone: false }],
      todo: ""
    });
  };

  render() {
    const { todo, error, todos } = this.state;
    console.log("render");
    return (
      <div style={{ ...styles.container, ...styles.column, ...styles.flex }}>
        <h1 style={styles.headerText}>My To-Do Application</h1>
        <TodoForm
          addTodo={this.addTodo}
          todo={todo}
          onChange={this.onChange}
          error={error}
        />
        <TodoList
          todos={todos}
          completeTask={this.completeTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

index.propTypes = {};

export default index;

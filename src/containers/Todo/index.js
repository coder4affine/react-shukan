import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import FilterTodos from "./filterTodos";
import styles from "./styles";

class index extends PureComponent {
  state = {
    todo: "",
    error: "",
    todos: [],
    status: "all"
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

  filterTodo = status => {
    this.setState({ status });
  };

  filterTodos = (todos, status) => {
    return todos.filter(item => {
      if (status === "pending") {
        return !item.isDone;
      } else if (status === "completed") {
        return item.isDone;
      } else {
        return true;
      }
    });
  };

  render() {
    const { todo, error, todos, status } = this.state;

    const filterTodos = this.filterTodos(todos, status);

    return (
      <div style={{ ...styles.container, ...styles.column, ...styles.flex }}>
        <div>
          <h1 style={styles.headerText}>My To-Do Application</h1>
          <TodoForm
            addTodo={this.addTodo}
            onChange={this.onChange}
            error={error}
          />
          <TodoList
            todos={filterTodos}
            completeTask={this.completeTask}
            deleteTask={this.deleteTask}
          />
        </div>
        {todos.length > 0 && <FilterTodos filterTodo={this.filterTodo} />}
      </div>
    );
  }
}

index.propTypes = {};

export default index;

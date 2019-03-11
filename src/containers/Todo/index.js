import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import FilterTodos from "./filterTodos";
import ErrorBoundary from "../../components/ErrorBoundary";
import styles from "./styles";

class index extends PureComponent {
  state = {
    todo: "",
    error: "",
    todos: [],
    status: "all"
  };

  constructor(props) {
    super(props);
    this.h1Ele = React.createRef();
  }

  componentDidMount() {
    this.getTodoData();
    this.h1Ele.current.setAttribute("style", "color:red");
    // this.h1Ele.setAttribute("style", "color:red");
    this.input.focus();
  }

  getTodoData = async () => {
    const res = await fetch("http://localhost:3004/todos");
    const todos = await res.json();
    this.setState({ todos });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
  };

  completeTask = async id => {
    const { todos } = this.state;
    const index = todos.findIndex(x => x.id === id);

    const todo = { ...todos[index], isDone: !todos[index].isDone };

    await fetch(`http://localhost:3004/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    const newTodos = [
      ...todos.slice(0, index),
      todo,
      ...todos.slice(index + 1)
    ];
    this.setState({ todos: newTodos });
  };

  deleteTask = async id => {
    const { todos } = this.state;
    await fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE"
    });
    this.setState({ todos: todos.filter(x => x.id !== id) });
  };

  addTodo = async e => {
    e.preventDefault();
    const { todo, todos } = this.state;
    if (!todo) {
      this.setState({ error: "Required" });
      return;
    }

    const res = await fetch("http://localhost:3004/todos", {
      method: "POST",
      body: JSON.stringify({ todo, isDone: false }),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    const newTodo = await res.json();

    this.setState({
      todos: [...todos, newTodo],
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
      <ErrorBoundary>
        <div style={{ ...styles.container, ...styles.column, ...styles.flex }}>
          <div>
            {/* <h1 ref={(ref = this.h1Ele = ref)} style={styles.headerText}>
              My To-Do Application
            </h1> */}
            <h1 ref={this.h1Ele} style={styles.headerText}>
              My To-Do Application
            </h1>
            <TodoForm
              ref={ref => (this.input = ref)}
              todo={todo}
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
      </ErrorBoundary>
    );
  }
}

index.propTypes = {};

export default index;

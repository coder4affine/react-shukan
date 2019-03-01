import React, { Component } from "react";

// const App = () => [<h1 key={1}>Hello World</h1>, <h1 key={2}>Hello World1</h1>];

class App extends Component {
  state = {
    text: "hello",
    error: ""
  };

  constructor(props) {
    super(props);
    console.log("constructor");
    this.onClick = this.onClick1.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.text !== prevState.text) {
      return {
        ...prevState
      };
    }
    return prevState;
  }

  getDerivedStateFromError = error => {};

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("heellow");
    }, 1000);

    document.addEventListener("copy", data => console.log(data));
    console.log(this.state.text);
    this.button.setAttribute("class", "democlass");
    console.log("componentDidMount");
  }

  shouldComponentUpdate = () => {
    return true;
  };

  // getSnapshotBeforeUpdate(prevProps, prevState) => {

  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState.text);
    console.log(this.state.text);
    if (prevState.text !== this.state.text) {
    }
    return "";
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(snapshot);
    console.log("componentDidUpdate");
  };

  onClick1() {
    this.setState({ text: "hello World" });
  }

  componentWillUnmount() {
    document.removeEventListener("copy");
    clearInterval(this.interval);
  }

  render() {
    console.log("render");
    return (
      <div>
        <button
          ref={ref => {
            this.button = ref;
          }}
          type="button"
          onClick={this.onClick}
        >
          {this.state.text}
        </button>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default App;

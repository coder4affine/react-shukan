import React, { Component, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import loadable from "@loadable/component";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./containers/Home";
// import Details from "./containers/Details";
// import About from "./containers/About";
import NoMatch from "./containers/NoMatch";
// import Todo from "./containers/Todo";

const AsyncHome = loadable(() => import("./containers/Home"), {
  fallback: <div>Loading...</div>
});
const AsyncDetails = loadable(() => import("./containers/Details"), {
  fallback: <div>Loading...</div>
});
const AsyncAbout = loadable(() => import("./containers/About"), {
  fallback: <div>Loading...</div>
});

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Header />
          <div style={{ display: "flex", flex: 1 }}>
            <Switch>
              <Route path="/" exact component={AsyncHome} />
              <Route path="/details" exact component={AsyncDetails} />
              <Route path="/about" exact component={AsyncAbout} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;

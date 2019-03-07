import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Details from "./containers/Details";
import About from "./containers/About";
import NoMatch from "./containers/NoMatch";
// import Todo from "./containers/Todo";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    label: "Home",
    isAuthenticated: false
  },
  {
    path: "/details",
    exact: false,
    component: Details,
    label: "Details",
    isAuthenticated: true
  },
  {
    path: "/about",
    exact: false,
    component: About,
    label: "About",
    isAuthenticated: false
  }
];

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
          <Header routes={routes} />
          <div style={{ display: "flex", flex: 1 }}>
            <Switch>
              {routes.map(route => {
                return (
                  <Route
                    exact={route.exact}
                    key={route.path}
                    path={route.path}
                    render={props => <route.component {...props} />}
                  />
                );
              })}
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

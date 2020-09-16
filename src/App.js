import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import routers from "./routers";
import { Provider } from "react-redux";
import configureStore from "./Redux/configStore";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Menu />
            <Switch>
              {routers.map((value, index) => {
                return (
                  <Route
                    path={value.path}
                    component={value.component}
                    exact={value.exact}
                    key={index}
                  />
                );
              })}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

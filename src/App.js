import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/Layout/Layout";
import Dashboard from "./containers/Dashboard/Dashboard";
import CoinDetails from "./containers/CoinDetails/CoinDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Layout>
              <Navigation />
              <Route path="/" exact component={Dashboard} />
              <Route path="/coin/:id" exact component={CoinDetails} />
              <Route
                path="/settings"
                exact
                component={() => <h1>Settings</h1>}
              />
            </Layout>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

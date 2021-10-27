import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
//
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import Layout from "ui/components/layout";
import LandingPage from "ui/pages/landingPage";
import RentingPage from "ui/pages/rentingPage";
import CatalogPage from "ui/pages/catalogPage";

// Some routes get rendered by themselves
// Some routes get rendered inside Layout, sharing menu and main container
function App() {
  return (
    <div title="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route>
            <Layout>
              <Route path="/catalogo" component={CatalogPage}></Route>
              <Route path="/alquiler" component={RentingPage}></Route>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Splash from "./pages/splash";
import Dashboard from "./pages/dashboard";
// import Checkpoints from "./pages/Checkpoints";
import Journal from "./pages/journal";
import History from "./pages/history";
import Charts from "./pages/charts";
import NotFound from "./pages/notFound";

import AccountProvider from './context';


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <AccountProvider >
            <div className="App">
              <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/journal" component={Journal} />
                <Route exact path="/charts" component={Charts} />
                <Route exact path="/history" component={History} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </AccountProvider>
        </Router>
      </div>
    );
  }
}

export default App;
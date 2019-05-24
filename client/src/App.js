import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
// import Landing from "./pages/landing";
// import Register from "./pages/register";
// import Login from "./pages/login";
import Splash from "./pages/splash";
import Dashboard from "./pages/dashboard";
// import Checkpoints from "./components/pages/Checkpoints";
import Journal from "./pages/journal";
// import History from "./components/pages/History";
// import Charts from "./components/pages/Charts";
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
                {/* <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} /> */}
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/journal" component={Journal} />
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
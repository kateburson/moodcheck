import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./pages/dashboard";
// import Checkpoints from "./components/pages/Checkpoints";
// import Journal from "./components/pages/Journal";
// import History from "./components/pages/History";
// import Charts from "./components/pages/Charts";

import { UserContext } from './context';


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <UserContext >
            <div className="App">
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              {/* <Switch> */}
         
                {/* <PrivateRoute exact path="/checkpoints" component={Checkpoints} /> */}
                {/* <PrivateRoute exact path="/journal" component={Journal} /> */}
                {/* <PrivateRoute exact path="/history" component={History} /> */}
                {/* <PrivateRoute exact path="/charts" component={Charts} /> */}
              {/* </Switch> */}
            </div>
          </UserContext>
        </Router>
      </div>
    );
  }
}

export default App;

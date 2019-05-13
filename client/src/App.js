import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Landing from "./pages/landing";
import Register from "./pages/register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/pages/Dashboard";
// import Checkpoints from "./components/pages/Checkpoints";
// import Journal from "./components/pages/Journal";
// import History from "./components/pages/History";
// import Charts from "./components/pages/Charts";


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Switch> */}
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
              {/* <PrivateRoute exact path="/checkpoints" component={Checkpoints} /> */}
              {/* <PrivateRoute exact path="/journal" component={Journal} /> */}
              {/* <PrivateRoute exact path="/history" component={History} /> */}
              {/* <PrivateRoute exact path="/charts" component={Charts} /> */}
            {/* </Switch> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

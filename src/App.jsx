import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Login from "./components/Auth/Login";
import Home from "./components/HomeComponents/Home";
import Register from "./components/Auth/Register";
// import Main1 from "./components/Main1";
// import Main2 from "./components/Main2";
import Userhome from "./components/Userhome/Userhome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <AuthRoute path="/userhome" component={Userhome} />
        {/* <AuthRoute path="/main" exact component={Main1} />
        <AuthRoute path="/main/hotels" exact component={Main2} /> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// import './App.css';
// import Slides from './components/carousel';
import React from "react"
import Navbar from './components/navbar';
import Signup from './pages/signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Forgot from './pages/forgot';
import User from "./pages/user"
import Home from "./pages/home"


function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path="/login" component={Login}>
              <Login />
            </Route>
            <Route exact path={["/signup"]}>
              <Signup />
            </Route>
            <Route exact path={["/forgot"]}>
              <Forgot />
            </Route>
            <Route exact path="/user" component={() => <User authorized={true} />}>
              <User />
            </Route>
          </Switch>


        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;

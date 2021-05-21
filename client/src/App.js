// import './App.css';
// import Slides from './components/carousel';
import Navbar from './components/navbar';
import Signup from './pages/signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Forgot from './pages/forgot';
import User from "./pages/user"
import Home from "./pages/home"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            {/* <Slides /> */}
            <Home />

          </Route>
          <Route exact path={["/login"]}>
            <Login />
          </Route>
          <Route exact path={["/signup"]}>
            <Signup />
          </Route>
          <Route exact path={["/forgot"]}>
            <Forgot />
          </Route>
          <Route exact path={["/user"]}>
            <User />
          </Route>



        </Switch>

        {/* <CoinsAPI /> */}
      </div>
    </Router>
  );
}

export default App;

// import './App.css';
import Slides from './components/carousel';

import Navbar from './components/navbar';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinBaseAPI from './components/coinbaseAPI';
import CoinsAPI from "./components/coins"
import Login from './components/login';
// Route,

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Slides />
          </Route>
          <Route exact path={["/login"]}>
            <Login />
          </Route>
          <Route exact path={["/signup"]}>
            <Signup />
          </Route>



        </Switch>
        <CoinBaseAPI />
        <CoinsAPI />
      </div>
    </Router>
  );
}

export default App;

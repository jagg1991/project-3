// import './App.css';
import Carousel from './components/carousel';
import Login from './components/login';
import Navbar from './components/navbar';
import Signup from './components/signup';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CoinBaseAPI from './components/coinbaseAPI';
import CoinsAPI from "./components/coins"
// Route,

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Login />
          <Signup />
          <Carousel />

        </Switch>
        <CoinBaseAPI />
        <CoinsAPI />
      </div>
    </Router>
  );
}

export default App;

// import './App.css';
import Carousel from "./components/carousel";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Signup />
      <Carousel />
    </div>
  );
}

export default App;

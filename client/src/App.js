import React, { useState, useEffect, useContext } from "react"
import Navbar from './components/navbar';
import Signup from './pages/signup';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './pages/login';
import Forgot from './pages/forgot';
import User from "./pages/user"
import Home from "./pages/home"
import UserContext from "./store/userContext"
import API from "./utils/API"
import About from "./pages/about"
import Congrats from "./pages/congrats"
import Play from "./components/play"

const ProtectedRoute = ({ component: Component, ...rest }) => {


  const { user } = useContext(UserContext)
  return (
    <Route
      {...rest}
      render={props => {
        // user.isLoggedIn ?
        // (<Component {...props} />) :
        // (<Redirect to='/login' />)
        if (user.isLoggedIn) {
          (<Component {...props} />)

        }
        else {
          (<Redirect to='/login' />)
        }
      }}
    />
  )
}

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    isLoggedIn: null
  })



  useEffect(() => {
    API.getUser()
      .then(user => {
        console.log(user.data)
        if (user.data) {
          setUser({
            firstName: user.data.firstName,
            lastName: user.data.lastName,
            username: user.data.username,
            email: user.data.email,
            isLoggedIn: true
          })
        }


      })
      .catch(err => {
        console.log(err)
      })
  }, []
  )

  return (

    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">

          <Navbar />
          <Switch>

            {/* <ProtectedRoute  >
              <Route exact path="/user" component={User} />
              <Route exact path="/congrats" component={Congrats} />
            </ ProtectedRoute> */}

            <Route path="/login" component={Login} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path={["/forgot"]} component={Forgot} />
            <Route exact path="/about" component={About} />
            <Route exact path="/play" component={Play} />
          </Switch>


        </div>
      </UserContext.Provider>
    </Router >

  );
}

export default App;

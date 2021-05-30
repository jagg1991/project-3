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

            <ProtectedRoute path="/user" component={User} />
            <Route path="/login" component={Login} />


            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            {/* <Route exact path="/login" component={Login}>
              <Login />
            </Route> */}
            <Route exact path={["/signup"]}>
              <Signup />
            </Route>
            <Route exact path={["/forgot"]}>
              <Forgot />
            </Route>
            {/* <Route exact path="/user" component={() => <User authorized={true} />}>
              <User />
            </Route> */}
            <Route exact path="/about" >
              <About />
            </Route>
            <Route exact path="/congrats" >
              <Congrats />
            </Route>
          </Switch>


        </div>
      </UserContext.Provider>
    </Router>

  );
}

export default App;

import React, { useState } from "react";
import "../styles/Signup.css"
import { Button } from "react-bootstrap";
import axios from "axios";
import Footer from "../components/footer"
//handles signup 
function Signup() {
    const [cred, setCred] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        // confirmPassword: ""
    })
    //handles the input change
    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        setCred({
            ...cred,
            [name]: value
        });



    };

    //handles the form submit
    const handleFormSubmit = event => {
        event.preventDefault();
        // const cancelTokenSource = axios.CancelToken.source();
        axios.post("/api/users/", cred)

            .then(user => {
                console.log(user.data)
                // if (user.data.password !== user.data.confirmPassword) {
                //     alert("Passwords dont match!")
                //     cancelTokenSource.cancel();
                // }
                if (user.data) {
                    document.location.replace('/login');
                }
            })

            .catch(err => {
                console.log(err)
            })


        setCred({
            email: "",
            password: ""
        });
    };


    return (
        <>
        <div className="container" style={{marginBottom: "175px"}}>


            <div id="login-box">
                <div className="left-box">


                    <form onSubmit={(e) => handleFormSubmit(e)} action="#">
                        <h1>Signup</h1>
                        <input onChange={(e) => handleInputChange(e)} value={cred.firstName} type="text" className="txtb" placeholder="First name" name="firstName" />
                        <input onChange={(e) => handleInputChange(e)} value={cred.lastName} type="text" className="txtb" placeholder="Last name" name="lastName" />
                        <input onChange={(e) => handleInputChange(e)} value={cred.username} type="text" className="txtb" placeholder="Username" name="username" />
                        <input onChange={(e) => handleInputChange(e)} value={cred.email} type="text" className="txtb" placeholder="Email" name="email" />
                        <input onChange={(e) => handleInputChange(e)} value={cred.password} type="text" className="txtb" placeholder="Password" name="password" />
                        {/* <input onChange={(e) => handleInputChange(e)} value={cred.confrimPassword} type="text" className="txtb" placeholder="Confirm Password" name="confirmPassword" /> */}
                        <div>
                            <Button type="submit" className="signup-btn" name="signup-button" value="Sign Up" >Sign up!</Button>
                        </div>
                    </form>

                    <small className="text-muted ">Already Have An Account?<a href="/login">Login</a></small>
                </div>
                <div className="right-box">
                </div>
            </div>

           
        </div>
         <Footer></Footer>
      </>
    )
}

export default Signup
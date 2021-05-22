import React from "react";
import "../styles/Signup.css"
function Signup() {
    return (
        <div classNameName="container">


            <div id="login-box">
                <div className="left-box">

                    <h1>Signup</h1>
                    <form action="#" method="post">
                        <input type="text" className="txtb" placeholder="First name" />
                        <input type="text" className="txtb" placeholder="Last name" />
                        <input type="text" className="txtb" placeholder="Email" />
                        <input type="text" className="txtb" placeholder="Password" />
                        <input type="text" className="txtb" placeholder="Confirm Password" />
                        <input type="submit" value="Sign Up" name="signup-button" className="signup-btn" />
                    </form>
                    <small className="text-muted ">Already Have An Account?<a href="/login">Login</a></small>
                </div>
                <div className="right-box">
                </div>
            </div>

        </div>
    )
}

export default Signup
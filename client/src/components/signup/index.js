import React from "react";

function Signup() {
    return (
        <div className="container">
            <label for="show" className="close-btn fas fa-times" title="close"></label>
            <div className="text">
            </div>
            <form action="#" className="form login-form">
                <div className="data">
                    <label>Email or Phone</label>
                    <input id="email-login" type="text" required />
                </div>
                <div className="data">
                    <label>Password</label>
                    <input id="password-login" type="password" required />
                </div>
                <div className="forgot-pass">
                    <a href="go">Forgot Password?</a>
                </div>
                <div className="btn">
                    <div className="inner">
                    </div>
                    <button type="submit">login</button>
                </div>
                <div className="signup-link">
                    Not a member? <a href="/signup">Signup now</a></div>
            </form>
        </div>
    )
}

export default Signup
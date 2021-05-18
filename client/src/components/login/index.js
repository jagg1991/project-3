import React from "react";

function Login() {
    return (
        // <div className="container">
        //     <div className="center">
        //         <input type="checkbox" id="show" />
        //         <label for="show" class="show-btn">Welcome</label>
        //         <div className="container">
        //             <label for="show" className="close-btn fas fa-times" title="close"></label>
        //             <div className="text">
        //             </div>
        //             <form action="#" className="form login-form">
        //                 <div className="data">
        //                     <label>Email or Phone</label>
        //                     <input id="email-login" type="text" required />
        //                 </div>
        //                 <div className="data">
        //                     <label>Password</label>
        //                     <input id="password-login" type="password" required />
        //                 </div>
        //                 <div className="forgot-pass">
        //                     <a href="go">Forgot Password?</a>
        //                 </div>
        //                 <div className="btn">
        //                     <div className="inner">
        //                     </div>
        //                     <button type="submit">login</button>
        //                 </div>
        //                 <div className="signup-link">
        //                     Not a member? <a href="/signup">Signup now</a></div>
        //             </form>
        //         </div>
        //     </div>
        // </div>

        <div className="bg-img">
            <div className="content">
                <header>Login Form</header>
                <form action="#">
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input type="text" required placeholder="Email or Phone" />
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"></span>
                        <input type="password" className="pass-key" required placeholder="Password" />
                        <span className="show">SHOW</span>
                    </div>
                    <div className="pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="field">
                        <input type="submit" value="LOGIN" />
                    </div>
                </form>
                <div className="login">
                    Or login with</div>
                <div className="links">
                    <div className="facebook">
                        <i className="fab fa-facebook-f"><span>Facebook</span></i>
                    </div>
                    <div className="instagram">
                        <i classNames="fab fa-instagram"><span>Email</span></i>
                    </div>
                </div>
                <div className="signup">
                    Don't have account?
            <a href="#">Signup Now</a>
                </div>
            </div>
        </div>
    )
}

export default Login
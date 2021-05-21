// import React from "react";
// import Login from "../components/login"

// function SubmitLogin() {
//     // const [username, setUsername] = useState();
//     // const [password, setPassword] = useState();

//     // const handleSubmit = e => {
//     //     e.preventDefault();
//     // }

//     return (
//         // <Login>

//         // </Login>
//         <div>Hello world</div>
//     )

// }

// export default SubmitLogin

import React from "react";

function Login() {
    return (
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
                        <a href="/forgot">Forgot Password?</a>
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
                        <i classNames="fab fa-Email"><span>Email</span></i>
                    </div>
                </div>
                <div className="signup">
                    Don't have account?
<a href="/signup">Signup Now</a>
                </div>
            </div>
        </div>
    )
}

export default Login
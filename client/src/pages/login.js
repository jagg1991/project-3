import axios from "axios";
import React, { useState } from "react";
import "../styles/Login.css"

// const pass_field = document.querySelector('.pass-key');
// const showBtn = document.querySelector('.show');
// showBtn.addEventListener('click', function () {
//     if (pass_field.type === "password") {
//         pass_field.type = "text";
//         showBtn.textContent = "HIDE";
//         showBtn.style.color = "#3498db";
//     } else {
//         pass_field.type = "password";
//         showBtn.textContent = "SHOW";
//         showBtn.style.color = "#222";
//     }
// });

function Login() {
    const [cred, setCred] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        setCred({
            ...cred,
            [name]: value
        });



    };
    const handleFormSubmit = event => {

        event.preventDefault();
        axios.post("/api/users/auth", cred)
            .then(data => {
                console.log(data.data)
            })
            .catch(err => {
                console.log(err)
            })
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

        // setCred({
        //     email: "",
        //     password: ""
        // });
    };

    return (

        <div className="bg-img">
            <div className="content">
                <header>Login Form</header>
                <form onSubmit={(e) => handleFormSubmit(e)} action="#">
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input name="email" type="text" required placeholder="Email" onChange={(e) => handleInputChange(e)} value={cred.email} />
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"></span>
                        <input name="password" type="password" className="pass-key" required placeholder="Password" onChange={(e) => handleInputChange(e)} value={cred.password} />
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
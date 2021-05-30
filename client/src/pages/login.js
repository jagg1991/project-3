import axios from "axios";
import React, { useState, useContext } from "react";
import "../styles/Login.css"
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserContext from "../store/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins } from "@fortawesome/free-solid-svg-icons"


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
    let history = useHistory();

    const [cred, setCred] = useState({
        email: "",
        password: ""
    })

    const { setUser } = useContext(UserContext)
    // const [user, setUsers] = useState({
    //     email: "",
    //     firstName: "",
    //     lastName: "",
    //     username: "",

    // })

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
                    history.push('/user')
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

        <div className="container bg-img">
            <div className="content">
                <header>Login!</header>
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
                    {/* <div className="field">
                        <input type="submit" value="LOGIN" />
                    </div> */}
                    {/* onClick={() => { history.push("./user") }} */}
                    <Button type="submit" className="field" value="LOGIN" >Login</Button>

                </form>
                <div className="login">
                    Or login with</div>
                <div className="links">
                    <div className="facebook">
                        <i className="fab fa-facebook-f"><span>Facebook</span></i>
                    </div>

                    <button className="instagram" style={{ color: "white" }}>
                        <FontAwesomeIcon style={{ color: "white", size: "5x", margin: "2px" }} icon={faCoins}></FontAwesomeIcon>Coinbase
                    </button>


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
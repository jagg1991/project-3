import axios from "axios";
import React, { useState } from "react";
import "../styles/Login.css"
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserContext from "../store/userContext"



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
    const [user, setUsers] = useState({
        email: "",
        firstName: "",
        lastName: "",
        username: "",

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


    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     axios.post("/api/users/auth", cred)
    //         .then(user => {
    //             // console.log(user.data)
    //             // if (user.data) {
    //             //     document.location.replace('/user');
    //             // }
    //             try {
    //                 await cred.signIn(email, password);
    //                 userHasAuthenticated(true);
    //                 history.push("/");
    //             } catch (e) {
    //                 alert(e.message);
    //             }

    //         })

    //         .catch(err => {
    //             console.log(err)
    //         })
    //     // Alert the user their first and last name, clear`this.state.firstName` and`this.state.lastName`, clearing the inputs

    //     setCred({
    //         email: "",
    //         password: ""
    //     });
    // }


    const handleFormSubmit = event => {

        event.preventDefault();
        axios.post("/api/users/auth", cred)
            .then(user => {
                console.log(user.data)
                // if (user.data) {
                //     document.location.replace('/user');
                // }
                setUsers(user.data)
            })

            .catch(err => {
                console.log(err)
            })

        setCred({
            email: "",
            password: ""
        });
        console.log(user)
    };

    return (
        <UserContext.Provider value={{ user }}>
            <div className="bg-img">
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

                        <Button onClick={() => { history.push("./user") }} type="submit" className="field" value="LOGIN" >Login</Button>

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
        </UserContext.Provider>
    )
}

export default Login
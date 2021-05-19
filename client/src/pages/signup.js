import React from "react";

function Signup() {
    return (
        <div className="container">


            <form className="form signup-form">
                <h2>Signup</h2>
                <div className="data">
                    <label for="name-signup">First name:</label>
                    <input className="form-input" type="text" id="name-signup" />
                </div>
                <div className="data">
                    <label for="name-signup">Last name:</label>
                    <input className="form-input" type="text" id="name-signup" />
                </div>
                <div className="data">
                    <label for="email-signup">email:</label>
                    <input className="form-input" type="text" id="email-signup" />
                </div>
                <div className="data">
                    <label for="password-signup">password:</label>
                    <input className="form-input" type="password" id="password-signup" />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" type="submit">signup</button>
                </div>
            </form>

        </div>
    )
}

export default Signup
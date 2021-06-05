import React from "react"
import "../styles/forgot.css";
import Footer from "../components/footer"


function Forgot() {
    return (
<>
        <div className="container">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="bg-white text-center p-5 mt-3 center">
                    <h3>Forgot Password </h3>
                    <p>Type in your email below, and we will send you a link to reset you password!</p>
                    <form class="pb-3" action="#">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email" required />
                        </div>
                    </form>
                    <button type="button" class="forgot">Reset Password</button>
                </div>
            </div>
        </div>
<Footer>
  
</Footer>
</>
    )
}

export default Forgot
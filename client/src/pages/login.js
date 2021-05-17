import React, { useState } from "react";
import Login from "../components/login"

function SubmitLogin() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Login>

        </Login>
    )

}

export default SubmitLogin
import React, { createContext } from "react";

const UserContext = createContext({
    firstName: "",
    lastName: "",
    username: "",
    email: ""
});

export default UserContext
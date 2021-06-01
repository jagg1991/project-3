import React, { createContext } from "react";

const UserContext = createContext({
    userData: {

        firstName: "",
        lastName: "",
        username: "",
        email: "",
        isLoggedIn: false
    },
    setUser: () => { }
});

export default UserContext
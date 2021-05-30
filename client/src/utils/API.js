import axios from "axios";

const API = {
    getUser: function () {
        return axios.get("/api/users")
    },
    getUserById: function (id) {
        return axios.get("/api/user/" + id)
    }

}

export default API
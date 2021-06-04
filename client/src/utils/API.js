import axios from "axios";

const API = {
    getUser: function () {
        return axios.get("/api/users")
    },
    getUserById: function (id) {
        return axios.get("/api/user/" + id)
    },
    updateLand: function (data) {
        return axios.put("/api/users", data)
    }
}

export default API
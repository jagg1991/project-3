import axios from "axios";

const BASEURL = "https://api.pro.coinbase.com";




// eslint-disable-next-line import/no-anonymous-default-export
const coinbaseAPI = {
    search: function () {
        return axios.get(BASEURL);
    }
};

export default coinbaseAPI;
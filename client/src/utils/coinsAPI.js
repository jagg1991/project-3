import axios from "axios";

const BASEURL = "https://coinranking1.p.rapidapi.com/coins";
const APIKEY = "&apikey=6293b63880msh4f5085d44ac576dp1f1815jsna986672c5e21"




// eslint-disable-next-line import/no-anonymous-default-export
const coinsAPI = {
    search: function () {
        return axios.get(BASEURL + APIKEY);
    }
};

export default coinsAPI;
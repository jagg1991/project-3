import axios from "axios";




function coinsAPI() {

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        headers: {
            'x-rapidapi-key': '6293b63880msh4f5085d44ac576dp1f1815jsna986672c5e21',
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
    };

    return axios.request(options).then(function (response) {
        // console.log(response.data);

        const results = response.data.data.coins
        // console.log(results)



        return results
    }).catch(function (error) {
        console.error(error);
    });
}


export default coinsAPI;
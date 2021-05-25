import axios from "axios";




function nasaAPI() {

    const options = {
        method: 'GET',
        url: 'https://images-api.nasa.gov/search?q=moon',

    };

    return axios.request(options).then(function (response) {
        console.log(response.data);

        // const results = response.data.data.coins
        // console.log(results)



        // return results
    }).catch(function (error) {
        console.error(error);
    });
}


export default nasaAPI;



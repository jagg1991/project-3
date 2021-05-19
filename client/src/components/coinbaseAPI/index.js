import React from "react";
import coinsAPI from "../../utils/coinsAPI"

class CoinBaseAPI extends React.Component {
    state = {
        results: {}
    }
    componentDidMount() {
        coinsAPI()

    }

    // searchCoin = () => {
    //     coinBaseAPI.search()
    //         .then(res => this.setState({ results: res.data }))
    //         .catch(err => console.log(err));
    // }



    render() {
        return (
            <>
                <div className="container">Hello World</div>
            </>
        )
    }

}

export default CoinBaseAPI
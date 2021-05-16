import React from "react";
import coinBaseAPI from "../../utils/coinbaseAPI"

class CoinBaseAPI extends React.Component {
    state = {
        results: {}
    }
    componentDidMount() {
        this.searchCoin();
    }

    searchCoin = () => {
        coinBaseAPI.search()
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <div className="container"></div>
            </>
        )
    }

}

export default CoinBaseAPI
import React from "react";
import coinsAPI from "../../utils/coinsAPI"

class CoinsAPI extends React.Component {
    state = {
        results: []
    }
    componentDidMount() {
        this.searchCoin();
    }

    searchCoin = () => {
        coinsAPI.search()
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

export default CoinsAPI
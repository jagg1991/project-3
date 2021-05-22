
import React, { useEffect, useState } from "react";
import { Carousel, Jumbotron } from "react-bootstrap";
import coinsAPI from "../../utils/coinsAPI";
import Container from "../container"
function Slides() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        async function getCoins() {
            const coinData = await coinsAPI()
            coinData.length = 10
            console.log(coinData)
            setCoins(coinData)
            console.log()
        }

        getCoins()

    }, []

    )
    return (

        <div className="container">
            <Jumbotron fluid>
                <h1 style={{ textAlign: "center" }}>Top 10 Cryptocurrenies!</h1>
                <Container>
                    <Carousel fade>


                        {coins.map(coin => {
                            return (

                                <Carousel.Item key={coin.id} style={{ background: "grey" }} >

                                    <a href={coin.websiteUrl}>
                                        <img
                                            className="d-block w-100"
                                            src={coin.iconUrl}
                                            alt={coin.id}
                                            href={coin.websiteUrl}
                                        />
                                    </a>
                                    <Carousel.Caption>

                                        <h3>{coin.name}</h3>
                                        <p>{ }</p>

                                    </Carousel.Caption>


                                </Carousel.Item>

                            )
                        })}

                    </Carousel>
                </Container>
                {/* </div > */}
            </Jumbotron >
        </div>
    )
}

export default Slides



import React, { useEffect, useState } from "react";
import { Carousel, Jumbotron, Row } from "react-bootstrap";
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
            console.log(coinData)
        }

        getCoins()

    }, []

    )
    return (

        <Container fluid style={{
            background: "linear-gradient(115deg, #070808 35%, #646464 65%)",
            color: "white",
            padding: "15px",
            borderStyle: "ridge"
        }}>



            {/* <Jumbotron fluid> */}
            <h1 style={{ textAlign: "center", fontSize: "2vw" }}>Top 10 Cryptocurrenies!</h1>


            <Row>
                <Container fluid >
                    <Carousel fade style={{
                        borderStyle: "ridge"
                    }}>


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

                                        <h3 style={{ fontSize: "1vw" }}>{coin.name}</h3>
                                        <h4 style={{ fontSize: "1vw" }}>Coin price in USD: ${coin.price}</h4>

                                    </Carousel.Caption>



                                </Carousel.Item>

                            )
                        })}

                    </Carousel>
                </Container>
            </Row>
            {/* </Jumbotron > */}

        </Container>
    )
}

export default Slides


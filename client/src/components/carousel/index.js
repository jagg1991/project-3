
import React, { useEffect, useState } from "react";
import { Carousel, Jumbotron } from "react-bootstrap";
import coinsAPI from "../../utils/coinsAPI"
function Slides() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        async function getCoins() {
            const coinData = await coinsAPI()
            coinData.length = 5
            console.log(coinData)
            setCoins(coinData)
        }

        getCoins()

    }, []
    )
    return (
        <div className="container">
            <Jumbotron >

                <Carousel>
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100"
                            src="https://via.placeholder.com/150"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100"
                            src="https://via.placeholder.com/150"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100"
                            src="https://via.placeholder.com/150"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Jumbotron>
        </div>
    )
}

export default Slides


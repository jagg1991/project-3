
import React, { useEffect, useState } from "react";
import { Carousel, Jumbotron, Row, Card, Accordion, Modal, Button, Col, Container } from "react-bootstrap";
import coinsAPI from "../../utils/coinsAPI";

function Slides() {
     const [coins, setCoins] = useState([])

     const [show, setShow] = useState();
  
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    
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
            borderStyle: "ridge",
            width: "100%"
        }}>
<Row>
            <Row>

            {/* <Jumbotron fluid> */}
            <Col xs={12}>
            <h1 style={{ textAlign: "center", fontSize: "2vw" }}>Top 10 Cryptocurrenies!</h1>
            </Col>
            </Row>

            
               <Col xs={8}>
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
                </Col>
<Col xs={4}>
<Accordion defaultActiveKey="0" style={{color: "Black"}}>
{coins.map(coin => {
                            console.log(coin.description)
                            return (
                                <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                  {coin.name}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>{coin.description}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                              
                            )
                        })}
</Accordion>
</Col>
            </Row>
            {/* </Jumbotron > */}

        </Container>
    )
}

export default Slides



import React, { useEffect, useState } from "react";
import { Carousel, Jumbotron, Accordion, Card, Row, Col, Button, Modal } from "react-bootstrap";
import coinsAPI from "../../utils/coinsAPI";
import Container from "../container"
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
            console.log()
        }

        getCoins()

    }, []

    )
    return (

        <div className="container" style={{backgroundColor: "white,", margin: "40px"}}>
          
           <Container fluid style={{backgroundColor: "white"}}>
              <Row>
                <Col xs={12}>
               <header>
                <h1 style={{ textAlign: "center" }}>Top 10 Cryptocurrenies!</h1>
                </header>
                </Col>
                </Row>
                <Row> 
                <Col xs={8}>
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
         
            </Col>
            <Col xs={4}>
<Accordion defaultActiveKey="0">
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
</Container>
        </div>
     
    )
}

export default Slides


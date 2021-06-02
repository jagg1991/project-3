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
        }
    }
    )
       
    return (

      
        <div className="container" style={{backgroundColor: "white,", margin: "40px"}}>
           <Row> 
               <Col xs={8}>

                <h1 style={{ textAlign: "center" }}>Top 10 Cryptocurrenies!</h1>
                <Container>
                    <Carousel fade>
 
                    </Carousel>
                </Container>
          
      

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
        </div>

    )
}


export default Slides


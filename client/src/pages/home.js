import React, {useContext} from "react";
import Slides from "../components/carousel"
import Deck from "../components/cardDeck"
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";

import Explain from "../components/explain"

import UserContext from "../store/userContext"



function Home() {
    const { user } = useContext(UserContext)


    return (
        <> 
     <Container>
        <Slides></Slides>
        </Container>
                    
              
                <Row>
                    <Col></Col>
                    <Col xs={5}>
                        <Deck />
                    </Col>
                    <Col></Col>
                </Row>
          

            <Container>
                <header style={{ backgroundColor: "white", textAlign: "center" }}>Want to get in on the Lunar action?</header>
                <Deck />
            </ Container>



        </>
    )
}

export default Home
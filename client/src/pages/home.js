import React, {useContext} from "react";
import Slides from "../components/carousel"
import Deck from "../components/cardDeck"
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import Footer from "../components/footer"

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
                    
                    </Col>
                    <Col></Col>
                </Row>
          

            <Container>
              
                <header style={{ color:"white", textAlign: "center" }}>Want to get in on the Lunar action?</header>
                <hr style={{color: "white"}}/>
                
                <Deck />
            </ Container>


<Footer></Footer>
        </>
    )
}

export default Home
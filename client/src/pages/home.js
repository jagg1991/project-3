import React from "react";
import Slides from "../components/carousel"
import Deck from "../components/cardDeck"
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
// import nasaAPI from "../utils/nasaAPI";

function Home() {

    // nasaAPI()

    return (
        <>
            {/* <section className="container">
                <div className="row">

                    <div className="col-6">
                        <Slides />
                    </div>
                    <div className="col-6">
                        <Explain />
                        </ Explain>
                    </div>

                </div>
            </section> */}
            <Container >
                <Row>
                    <Col xs={8}>
                        <Slides /></Col>
                    <Col xs={4}>
                        <div className="container">

                        </div>
                    </Col>
                    <Col ></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={5}>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <Container>
                <header style={{ backgroundColor: "white", textAlign: "center" }}>Want to get in on the Lunar action?</header>
                <Deck />
            </ Container>



        </>
    )
}

export default Home
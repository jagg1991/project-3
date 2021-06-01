import React, {useContext} from "react";
import Slides from "../components/carousel"
import Deck from "../components/cardDeck"
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import UserContext from "../store/userContext"



function Home() {
    const { user } = useContext(UserContext)


    return (
        <>
            {/* <section className="container" fluid>
                <div className="row">

                    <div className="col-6">
                        <Slides />
                    </div>
                    <div className="col-6">


                    </div>

                </div>
            </section> */}
            <Container fluid >
                <Row>
                    <Col xs={12}>
                        <Slides /></Col>


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
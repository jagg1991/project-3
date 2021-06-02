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
                <Container>
                    <Row>
                        <Col xs={8}>
                            <Slides />
                        </Col>

                        {/* <Col xs={8}>
                            <div >
                                <blockquote className="blockquote mb-0">
                                    <p style={{ color: "white" }}>The 18th century was a time of change and revolution across the world. Intellectuals and ordinary men alike would gather to discuss anything and everything,
                                    from the social order problems of the day, to the latest scientific advances, and the intertwining political and philosophical issues. Clubs were formed in
                                    order to allow members the pleasure of enjoying the finest food and wine whilst debating these issues with other like-minded individuals.The Lunar Society,
                                    or Lunar Circle as it was first called, was one such club. It met in and around Birmingham, England between 1765 and 1813. It was the members of this club
                                    however, that would set it apart from any other. They cheerfully referred to themselves as the ‘lunatics’, but this could not have been much further from the
                                    truth, as the revolutionaries involved would change the face of the world forever.
                            </p>
                                    <footer className="blockquote-footer">
                                        by Ben Johnson<cite title="Source Title"></cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
                <Row>
                    <Col></Col>
                    <Col xs={5}>
                        <Deck />
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
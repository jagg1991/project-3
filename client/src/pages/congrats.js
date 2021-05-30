import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Congrats() {


    return (
        <>


            <Container className="congrats" fluid
                style={{
                    background: "linear-gradient(115deg, #070808 35%, #646464 65%)",

                    padding: "40px",
                    marginTop: "75px",
                    marginBottom: "150px",
                    marginRight: "20px",
                    marginLeft: "40px",
                    width: "95%",
                    height: "100%",
                    borderStyle: "ridge"

                }}>

                <Row>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "whitesmoke"
                        }}
                    >
                        Congratulations!</h1>
                    <br />
                    <Col xs={8}>

                        <div style={{

                            margin: "auto",
                            backgroundColor: "black",
                            borderStyle: "ridge"
                        }}>
                            <video
                                style={{
                                    margin: "auto",

                                }}
                                width="100%"
                                height="100%"
                                controls
                                src="https://images-assets.nasa.gov/video/NHQ_2019_0311_Go%20Forward%20to%20the%20Moon/NHQ_2019_0311_Go%20Forward%20to%20the%20Moon~large.mp4"
                                type="video/mp4"
                                autoPlay
                                preload={'auto'}

                            />
                        </div>

                    </Col>
                    <Col
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            borderStyle: "ridge"
                        }}>

                        <h1>Welcome to the Lunar Society!</h1>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>You are officially a Lunatic! We are getting closer to becoming a multi-planet species, and we would like to welcome you to the journey!
                        In January of 1967 the The Outer Space Treaty was signed as part of a space law . As part of this treaty, no nation may claim sovereignty of outer space or any celestial body.
                        This makes it a grey area to purchase Lunar land. Here at Lunar Society, we set out to solve that problem with the implementation of blockchain technology. In order to colonize celestial bodies, we will need to all come together to solve problems. We hope your ready for the challenge!</p>

                    </Col>

                </Row>

            </Container>



            {/* <iframe title="video" width="100%" height="100%" src="https://images-assets.nasa.gov/video/NHQ_2019_0311_Go%20Forward%20to%20the%20Moon/NHQ_2019_0311_Go%20Forward%20to%20the%20Moon~large.mp4">   </iframe> */}







        </>
    )
}

export default Congrats
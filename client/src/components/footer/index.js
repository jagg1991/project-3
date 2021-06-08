import React from "react"
import "../../styles/footer.css"
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

function Footer() {
    return (
        <footer style={{

            position: "relative",
            color: "rgb(240, 167, 32)",
            paddingTop: "5px",
            paddingBottom: "5px",
            width: "100%",

            textAlign: "center",
            fontSize: "smaller",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            background: "linear-gradient(115deg, #282e2e 35%, #646464 65%)",
            borderTop: "solid 5px orange",

            borderStyle: "ridge"
        }}>
            <Row>
                <Col xs={4}>
                    <h1> <FontAwesomeIcon style={
                        { color: "white", size: "5x", margin: "2px" }
                    }
                        icon={faMoon}></FontAwesomeIcon>Lunar Society</h1>
                    <p>&#169; 2021</p>
                </Col>
                <Col xs={4}>
                    <h1>Created by:</h1>
                    <p>Joseph Guajardo</p>
                    <p>Jeph</p>
                    <p>Mathew Webb</p>
                    <p>Guadalupe De Arcos</p>
                </Col>
                <Col xs={4}>
                    <h1>Get in touch!</h1>
                    <p><FontAwesomeIcon style={
                        { color: "white", size: "5x", margin: "2px" }
                    }
                        icon={faPhone}></FontAwesomeIcon> (555)555-5555</p>
                    <p><FontAwesomeIcon style={
                        { color: "white", size: "5x", margin: "2px" }
                    }
                        icon={faEnvelope}></FontAwesomeIcon> <a href="example@gmail.com">example@gmail.com</a></p>
                    <p><FontAwesomeIcon style={
                        { color: "white", size: "5x", margin: "2px" }
                    }
                        icon={faMapMarkerAlt}></FontAwesomeIcon> Sacramento, CA</p>
                </Col>
            </Row>
            {/* <Row>
            <Col xs={4}><p>&#169; 2021</p></Col>
            <Col xs={4}>
               
            </Col>
            <Col xs={4}></Col>
        </Row> */}


        </footer>
    )
}

export default Footer
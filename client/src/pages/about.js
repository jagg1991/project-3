import React from "react"
import "../styles/forgot.css";
import { Jumbotron } from "react-bootstrap";
import Explain from "../components/explain";

function About() {
    return (

        <Jumbotron>
            {/* <div className="container">
                <header className="blockquote mb-0">
                    Hello world
            </header>
            </div> */}
            <Explain></Explain>
        </Jumbotron>

    )
}

export default About
import React from "react"
import "../styles/forgot.css";
import { Jumbotron, Row, Col, Container  } from "react-bootstrap";
import "../styles/about.css"

function About() {
    return (

        // <Jumbotron>
         
        //     <Explain></Explain>
        // </Jumbotron>
<>
 
     {/* First row for Jumbotron */}
        <Row>
         <Col>
           <Jumbotron id="jumbotron"><h1>About Lunar Society</h1>
           </Jumbotron>
           </Col>
       </Row>
     
       <Container className="about">
            {/* second row for about information*/}
            <Row >
                {/* first col for about information, xs is how much space on page you want it to take up*/}
                <Col xs={6} >
                <blockquote className="blockquote mb-0">
                  <h4>History in the making</h4>
                   <p id="history">
                   The 18th century was a time of change and revolution across the world. Intellectuals and ordinary men alike 
                   would gather to discuss anything and everything, from the social order problems of the day, to the latest 
                   scientific advances, and the intertwining political and philosophical issues. Clubs were formed in order to 
                   allow members the pleasure of enjoying the finest food and wine whilst debating these issues with other like-minded 
                   individuals.The Lunar Society, or Lunar Circle as it was first called, was one such club. It met in and around 
                   Birmingham, England between 1765 and 1813. It was the members of this club however, that would set it apart from 
                   any other. They cheerfully referred to themselves as the ‘lunatics’, but this could not have been much further
                    from the truth, as the revolutionaries involved would change the face of the world forever.
                   </p>
                   <footer className="blockquote-footer">
                        by Ben Johnson<cite title="Source Title"></cite>
                    </footer>
               </blockquote>
                {/* second col for about information*/}
                </Col>
                <Col xs={6} > 
                <h1>Who are we?</h1>
                <p>We are students in a coding bootcamp, trying to build upon the blcokchain technologies. This will be our last
                    project before we head out into the real world! You can check out our GitHub portfolios below. <br />
                <a href="https://github.com/jagg1991">Joseph Guajardo</a> <br />
                    <a href="https://github.com/Jin5044">Jeph</a>  <br />
                    <a href="https://github.com/MWebb2321">Mathew Webb</a> <br /> 
                    <a href="https://github.com/Guadaluped74">Guadalupe De Arcos</a> <br />
                </p>


                <h1>What is our goal?</h1>

                <p>
                    Planet earth. It is the only planet that host life that we know of. As technology starts to grow 
                    exponentially, we will be able to explore the outer reaches of the our solar system and beyond! We will need a starting
                    point, and the perfect spot would be our own moon! As corporations and government set to put another human on the
                    moon, we look to expand humanity to be multi-planetary. Here are Lunar Society, we believe that all humanity should have a 
                    chance to own a piece of history. In 1967, the Outer Space Treaty was signed which prohibits governments from claiming a celestial body such as the 
                    Moon or a planet. However, this treaty doesn't prohibit individuals from acquiring celestial land. We would like to bring the freedom of land
                    owner ship to all humanity!  
        
                </p>
                </Col>
            </Row>
        </Container>
        </>

    )
}

export default About
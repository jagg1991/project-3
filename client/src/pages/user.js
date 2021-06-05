import React, { useContext, useState } from "react"
import { Card, Button, CardDeck, Row, Col, Container, Jumbotron, Modal,Nav} from "react-bootstrap"
// import { Redirect } from "react-router-dom"
import UserContext from "../store/userContext"
import { Redirect } from "react-router-dom";
import "../styles/user.css"
import Footer from "../components/footer"
function User() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);








    const { user } = useContext(UserContext)



    if (!user.firstName) {
        return <Redirect to='/login' />
    }
    else {
        return (
            <>



                <Row>
                    <Jumbotron id="user">
                        <Col xs={12}>
                            <h1 className="welcome">
                                Welcome {user.firstName}
                            </h1>
                            <p className="welcome">
                                Welcome to your profile page! Here you will see the lunar land you've reserved.
                            </p>
                            <Button variant="warning" onClick={handleShow}>
                                Profile
                            </Button>

                            <Modal className="popup" autoFocus={true} size={"xl"} show={show} onHide={handleClose}>
                                <Modal.Header className="profile" closeButton>
                                    <Modal.Title >{user.firstName} {user.lastName}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body  className="profile">
                                    <Row>
                                        <Col xs={8}>
                                            Email: {user.email}
                                        </Col>
                                        <Col xs={4}>
                                            <Button variant="dark" >
                                                Edit
                                            </Button>
                                        </ Col>
                                    </Row>
                                </Modal.Body >
                             
                                <Modal.Body className="profile">
                                    <Row>
                                        <Col xs={8}>
                                            First name: {user.firstName}
                                        </Col>
                                        <Col xs={4}>
                                            <Button variant="dark" >
                                                Edit
                                            </Button>
                                        </ Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Body className="profile">
                                    <Row>
                                        <Col xs={8}>
                                            Last name: {user.lastName}
                                        </Col>
                                        <Col xs={4}>
                                            <Button variant="dark" >
                                                Edit
                                            </Button>
                                        </ Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Body className="profile">
                                    <Row>
                                        <Col xs={8}>
                                            Username: {user.username}
                                        </Col>
                                        <Col xs={4}>
                                            <Button variant="dark" >
                                                Edit
                                            </Button>
                                        </ Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer className="profile">
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                     </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                     </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Jumbotron>
                </Row>
            <Row>
                {/* <Col xs={4}>
                <h1 style={{color: "white", textAlign: "center"}}>Hello World</h1>

                </Col>
                <Col xs={4}></Col>
                <Col xs={4}></Col> */}
                <header className="getting">
                    
                    <Row>
                        
                        <Col xs={4}></Col>
                        
                        <Col xs={4} style={{ textAlign: "center",color: "rgb(240, 167, 32)", marginTop: "280px", height: "250px", width: "100%", }}>
                            <h1>Are you ready to explore the moon?</h1> 
                            <p  style={{textAlign: "Center"}}>Lets take a journey to the beyond!</p>
                            </Col>
                        <Col xs={4}></Col>
                    </Row></header>
            </Row>

                <Row>

                </Row>

                <Container>


                    <div className="container">
                        <header>
                        <h1 style={{textAlign: "center", color: "rgb(240, 167, 32)", marginTop: "150px"}}>Your Lunar land awaits!</h1>
                        </header>
                        <CardDeck className="cardDeck">
                            <Card>
                                <Card.Img variant="top" src="moon.jpg" />
                                <Card.Body>
                                    <Card.Title>Congratulations!</Card.Title>
                                    <Card.Text>
                                        You've reserved 1 acre of land!
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="moon.jpg" />
                                <Card.Body>
                                    <Card.Title>Congratulations!</Card.Title>
                                    <Card.Text>
                                        You've reserved 5 acres of land!
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="moon.jpg" />
                                <Card.Body>
                                    <Card.Title>Congratulations!</Card.Title>
                                    <Card.Text>
                                        You've reserved 10 acres of land!
        </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated {user.userCreated}</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </Container>
                <Footer></Footer>
            </>
        )
    }

}

export default User
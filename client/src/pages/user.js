import React, { useContext, useState } from "react"
import { Card, Button, CardDeck, Row, Col, Container, Jumbotron, Modal } from "react-bootstrap"
// import { Redirect } from "react-router-dom"
import UserContext from "../store/userContext"
import { Redirect } from "react-router-dom";
import "../styles/user.css"

function User() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);








    const { user } = useContext(UserContext)


    console.log(user)
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
                            <Button variant="light" onClick={handleShow}>
                                Profile
                            </Button>

                            <Modal autoFocus={true} size={"xl"} show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{user.firstName} {user.lastName}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
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
                                </Modal.Body>
                                <Modal.Body>
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
                                <Modal.Footer>
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

                </Row>

                <Container>



                    {/* <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Welcome {user.firstName}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
        </Card.Text>
                        <Button variant="primary">Post</Button>
                    </Card.Body>
                </Card> */}
                    <div className="container">
                        <CardDeck>
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
                                        You've reserved 5 acre of land!
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
                                        You've reserved 10 acre of land!.
        </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </Container>
            </>
        )
    }

}

export default User
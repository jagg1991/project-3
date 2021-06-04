import axios from "axios";
import React, { useState, useContext } from "react";
import { Card, CardDeck, Button, Form } from "react-bootstrap"
import UserContext from "../../store/userContext";
// import { Redirect } from "react-router-dom";
function Deck() {
    const { user } = useContext(UserContext);

    const [reserve, setReserve] = useState({
        reserve1: "",
        reserve5: "",
        reserve10: ""

    })
    // if (!user.isLoggedIn) {
    //     return <Redirect to='/login' />
    // }





    const handleFormSubmit = event => {
        event.preventDefault();
        // axios.post("/api/land")
    }

    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;

        setReserve({
            ...reserve,
            [name]: value
        })
    };

    return (
        <>
            <Form onSubmit={(e) => handleFormSubmit(e)}>
                <CardDeck style={{ marginBottom: "20px" }}>
                    <Card>
                        <Card.Img variant="top" src="moon.jpg" />
                        <Card.Body>
                            <Card.Title>1 acres!</Card.Title>
                            <Card.Text>
                                Would you like to reserve 1 acre of land?!
                                    </Card.Text>
                            <Button name="reserve1" variant="dark" onChange={(e) => handleChange(e)} value={reserve.reserve1}>
                                Reserve now!
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="moon.jpg" />
                        <Card.Body>
                            <Card.Title>5 acres!</Card.Title>
                            <Card.Text>
                                Would you like to reserve 5 acers of Lunar land?
                                    </Card.Text>
                            <Button name="reserve5" variant="dark" onChange={(e) => handleChange(e)} value={reserve.reserve5}>
                                Reserve now!
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="moon.jpg" />
                        <Card.Body>
                            <Card.Title>10 acres!</Card.Title>
                            <Card.Text>
                                Would you like to reserve 10 acres of Lunar land?
                                     </Card.Text>
                            <Button name="reserve10" variant="dark" onChange={(e) => handleChange(e)} value={reserve.reserve10}>
                                Reserve now!
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Form>

        </>
    )
}

export default Deck
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Card, CardDeck, Button, Form } from "react-bootstrap"
import UserContext from "../../store/userContext";
import API from "../../utils/API"
// import { Redirect } from "react-router-dom";
function Deck() {
    const { user } = useContext(UserContext);

    const [reserve, setReserve] = useState({
        reserve1: false,
        reserve5: false,
        reserve10: false

    })
    // if (!user.isLoggedIn) {
    //     return <Redirect to='/login' />
    // }

useEffect(() =>{
    API.updateLand(reserve)
}, [reserve])



    const handleFormSubmit = event => {
        event.preventDefault();
        const { name } = event.target;
        setReserve(
            {
                ...reserve, [name]: true
            }
        )
          
    }



    return (
        <>
            
                <CardDeck style={{ marginBottom: "20px" }}>
                    <Card>
                        <Card.Img variant="top" src="moon.jpg" />
                        <Card.Body>
                            <Card.Title>1 acres!</Card.Title>
                            <Card.Text>
                                Would you like to reserve 1 acre of land?!
                                    </Card.Text>
                            <Button name="reserve1" variant="dark" onClick={(e) => handleFormSubmit(e)} >
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
                            <Button name="reserve5" variant="dark" onClick={(e) => handleFormSubmit(e)} >
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
                            <Button name="reserve10" variant="dark" onClick={(e) => handleFormSubmit(e)} >
                                Reserve now!
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
         

        </>
    )
}

export default Deck
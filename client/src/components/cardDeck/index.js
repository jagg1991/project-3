import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap"

function Deck() {
    return (
        <>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="moon.jpg" />
                    <Card.Body>
                        <Card.Title>1 acres!</Card.Title>
                        <Card.Text>
                            Would you like to reserve 1 acre of land?!
                                    </Card.Text>
                        <Button variant="dark">Reserve now!</Button>
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
                        <Button variant="dark">Reserve now!</Button>
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
                        <Button variant="dark">Reserve now!</Button>
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
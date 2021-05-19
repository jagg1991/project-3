import React from "react"
import { Form, Button, Col } from "react-bootstrap"



function Forgot() {
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Col sm={3} className="my-1">
                        <Form.Label>Need help loging in??</Form.Label>
                        <Form.Text className="text-muted">
                            Enter your email here, and we'll send you a link to reset your password!
                    </Form.Text>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Col>
                </Form.Group>





                <Button variant="primary" type="submit">
                    Send Link
                </Button>
            </Form>
        </div>
    )
}

export default Forgot
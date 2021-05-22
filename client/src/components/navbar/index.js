import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
function NavbarTab() {
    return (



        < Navbar sticky="top" bg="dark" variant="dark" expand="lg" >

            <Navbar.Brand href="/home">Lunar Society</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>

        </Navbar >

    )
}

export default NavbarTab
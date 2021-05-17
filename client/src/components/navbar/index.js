import React from "react";
import { Navbar, Nav } from "react-bootstrap"
function NavbarTab() {
    return (



        < Navbar sticky="top" bg="dark" variant="dark" expand="lg" >

            <Navbar.Brand href="/home">Home</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>

                </Nav>

            </Navbar.Collapse>

        </Navbar >

    )
}

export default NavbarTab
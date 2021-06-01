import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
function NavbarTab() {
    return (



        < Navbar collapseOnSelect sticky="top" bg="dark" variant="dark" expand="lg" >

            <Navbar.Brand href="/home">Lunar Society</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link style={{ float: "right" }} href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>


                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>

        </Navbar >

        //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="mr-auto">
        //                 <Nav.Link href="#features">Features</Nav.Link>
        //                 <Nav.Link href="#pricing">Pricing</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //             <Nav>
        //                 <Nav.Link href="#deets">More deets</Nav.Link>
        //                 <Nav.Link eventKey={2} href="#memes">
        //                     Dank memes
        //   </Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Navbar>

    )
}

export default NavbarTab
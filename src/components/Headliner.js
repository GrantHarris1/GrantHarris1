import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Headliner() {

    return (
        <>
            <title> Grant's Portfolio</title>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Grant Harris' Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/aboutme'>AboutMe</Nav.Link>
                            <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
                            <Nav.Link href='https://github.com/GrantHarris1'><i class="bi bi-github text-secondary" id="git"></i></Nav.Link >
                            <Nav.Link href='https://www.linkedin.com/in/1grantharris1/'><i class="bi bi-linkedin text-secondary" id="git"></i></Nav.Link >
                            <Nav.Link
                                data-tf-popup="HWfJz59o"
                            //style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#FFFFFF;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;"
                            >
                                Lets Connect
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
               </Navbar>


        </>
    )
}

import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-white border-bottom fixed-top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">Squid</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#features" className="text-dark">Features</Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark">Pricing</Nav.Link>
                        <Nav.Link href="#about" className="text-dark">About</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="ms-lg-3">
                            <Button variant="outline-primary" size="sm" className="px-4">Log in</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login" className="ms-2">
                            <Button variant="primary" size="sm" className="px-4">Sign up</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default LandingNavbar;

import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Landing = () => {
    return (
        <div className="landing-page position-relative overflow-hidden">
            {/* Ambient Glow Orbs */}
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
            <div className="glow-orb orb-3"></div>

            {/* Navbar */}
            <Navbar expand="lg" className="px-lg-5">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-white fw-bold fs-4 d-flex align-items-center">
                        <i className="bi bi-exclude me-2"></i> Squid
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white">
                        <i className="bi bi-list fs-2"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
        
                        <div className="ms-auto d-flex align-items-center gap-3">
                            <Link to="/login" className="text-decoration-none text-white small opacity-75 hover-opacity-100">Login</Link>
                            <Link to="/signup">
                                <Button className="bg-gradient-primary border-0 px-4 py-2 rounded-pill shadow-lg">
                                    Download template
                                </Button>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <Container className="text-center pt-5 mt-4">
                <Row className="justify-content-center">
                    <Col lg={10} className="position-relative z-2">
                        <h1 className="hero-title text-white">
                            Beautiful Landing Page <br />
                            <span className="text-gradient">Design for You</span>
                        </h1>
                        <p className="lead text-white-50 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                            A good design is not only aesthetically pleasing, but also
                            functional. It should be able to solve the problem.
                        </p>

                        <div className="position-relative d-inline-block">
                            <Link to="/signup">
                                <Button className="bg-gradient-primary border-0 px-5 py-3 rounded-pill fs-5 mb-5 shadow-lg position-relative z-2">
                                    Login for Download template
                                </Button>
                            </Link>
                            {/* Decorative element for '198 Hug' tag from image */}
                            <div className="position-absolute start-100 top-100 translate-middle badge bg-primary rounded-pill p-2 ms-3 mt-n3" style={{ fontSize: '0.7rem', opacity: 0.8 }}>
                                198 Hug x 44 Hug
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Dashboard Preview / Cards Section */}
            <Container className="mb-5 pb-5">
                <div className="glass-card p-4 p-lg-5 rounded-4 mx-auto" style={{ maxWidth: '1000px', minHeight: '500px' }}>
                    <Row className="g-4">
                        {/* Sidebar Preview */}
                        <Col md={3} className="d-none d-md-block">
                            <div className="d-flex flex-column gap-3 opacity-50">
                                <div className="bg-secondary rounded-3" style={{ height: '10px', width: '60%' }}></div>
                                <div className="bg-secondary rounded-3" style={{ height: '10px', width: '80%' }}></div>
                                <div className="bg-secondary rounded-3" style={{ height: '10px', width: '70%' }}></div>
                                <div className="bg-secondary rounded-3 mt-4" style={{ height: '10px', width: '50%' }}></div>
                            </div>
                        </Col>

                        {/* Main Content Preview */}
                        <Col md={9}>
                            <Row className="g-4 text-center">
                                <Col md={4}>
                                    <div className="glass-card p-4 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
                                        <div className="rounded-circle border border-2 border-primary mb-3 p-1" style={{ width: '60px', height: '60px' }}>
                                            <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-100 h-100 rounded-circle" />
                                        </div>
                                        <div className="bg-secondary rounded-pill w-50" style={{ height: '8px' }}></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="glass-card p-4 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center position-relative">
                                        {/* Circular Chart Simulation */}
                                        <div className="position-relative mb-3" style={{ width: '80px', height: '80px' }}>
                                            <svg viewBox="0 0 36 36" className="w-100 h-100">
                                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#444" strokeWidth="2" />
                                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#ff7eb3" strokeWidth="2" strokeDasharray="75, 100" />
                                            </svg>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="glass-card p-4 rounded-4 h-100">
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <img src="https://i.pravatar.cc/100?img=1" className="rounded-circle" width="30" alt="" />
                                            <div className="bg-secondary rounded-pill w-50" style={{ height: '6px' }}></div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <img src="https://i.pravatar.cc/100?img=2" className="rounded-circle" width="30" alt="" />
                                            <div className="bg-secondary rounded-pill w-50" style={{ height: '6px' }}></div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <img src="https://i.pravatar.cc/100?img=3" className="rounded-circle" width="30" alt="" />
                                            <div className="bg-secondary rounded-pill w-50" style={{ height: '6px' }}></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-4 g-4">
                                <Col md={8}>
                                    <div className="glass-card p-4 rounded-4 h-100 d-flex align-items-end justify-content-center gap-2" style={{ minHeight: '150px' }}>
                                        <div className="bg-primary opacity-50 rounded-top" style={{ width: '20px', height: '40%' }}></div>
                                        <div className="bg-primary opacity-75 rounded-top" style={{ width: '20px', height: '60%' }}></div>
                                        <div className="bg-primary rounded-top" style={{ width: '20px', height: '80%' }}></div>
                                        <div className="bg-primary opacity-25 rounded-top" style={{ width: '20px', height: '30%' }}></div>
                                        <div className="bg-primary opacity-50 rounded-top" style={{ width: '20px', height: '50%' }}></div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="glass-card p-4 rounded-4 h-100"></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>

            {/* Footer */}
            <footer className="text-center text-white-50 py-4 small">
                <Container>
                    &copy; 2026 Squid Design. All rights reserved.
                </Container>
            </footer>
        </div>
    );
};

export default Landing;

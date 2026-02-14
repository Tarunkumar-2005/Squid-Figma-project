import React, { useState } from 'react';
import { Container, Card, Form, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        const result = signup(name, email, password);
        if (result.success) {
            setSuccess('Account created successfully! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Container style={{ maxWidth: '400px' }}>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">
                        <h2 className="text-center mb-4 fw-bold text-primary">Squid Figma</h2>
                        <h5 className="text-center mb-4">Create an Account</h5>

                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Input
                                id="name"
                                label="Full Name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <Input
                                id="email"
                                type="email"
                                label="Email address"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="d-grid mt-4">
                                <Button type="submit" variant="primary" size="lg">
                                    Sign Up
                                </Button>
                            </div>
                        </Form>
                        <div className="text-center mt-3">
                            <small className="text-black">
                                Already have an account? <Link to="/login">Log in</Link>
                            </small>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Signup;

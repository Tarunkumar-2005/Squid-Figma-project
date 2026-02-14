import React, { useState } from 'react';
import { Container, Card, Form, Alert } from 'react-bootstrap';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard';

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        const success = login(email, password);
        if (success) {
            navigate(from, { replace: true });
        } else {
            setError('Failed to log in.');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Container style={{ maxWidth: '400px' }}>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">
                        <h2 className="text-center mb-4 fw-bold text-primary">Squid Figma</h2>
                        <h5 className="text-center mb-4">Welcome back</h5>

                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form onSubmit={handleSubmit}>
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
                                    Sign In
                                </Button>
                            </div>
                        </Form>
                        <div className="text-center mt-3">
                            <small className="text-black">new user? <Link to="/signup">Sign up</Link></small>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Login;

import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Alert } from 'react-bootstrap';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Settings = () => {
    const [name, setName] = useState('Demo User');
    const [email, setEmail] = useState('user@example.com');
    const [theme, setTheme] = useState('light');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.setAttribute('data-theme', savedTheme);

        // Check if dark theme is active to toggle bootstrap dark mode if needed (optional)
        // For simplicity, we are using a custom data-theme attribute
    }, []);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setMessage('Settings saved successfully!');
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Settings</h1>
            </div>

            <Row>
                <Col md={8}>
                    <Card title="Profile Settings" className="shadow-sm border-0 mb-4">
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form onSubmit={handleSave}>
                            <Input
                                id="settings-name"
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                id="settings-email"
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button type="submit">Save Changes</Button>
                        </Form>
                    </Card>

                    <Card title="Appearance" className="shadow-sm border-0">
                        <div className="mb-3">
                            <label className="form-label d-block">Theme Preference</label>
                            <div className="btn-group" role="group">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="theme"
                                    id="light-theme"
                                    autoComplete="off"
                                    checked={theme === 'light'}
                                    onChange={() => handleThemeChange('light')}
                                />
                                <label className="btn btn-outline-primary" htmlFor="light-theme">
                                    <i className="bi bi-sun me-2"></i>Light
                                </label>

                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="theme"
                                    id="dark-theme"
                                    autoComplete="off"
                                    checked={theme === 'dark'}
                                    onChange={() => handleThemeChange('dark')}
                                />
                                <label className="btn btn-outline-primary" htmlFor="dark-theme">
                                    <i className="bi bi-moon me-2"></i>Dark
                                </label>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </DashboardLayout>
    );
};

export default Settings;

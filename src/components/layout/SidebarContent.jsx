import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SidebarContent = ({ onNavigate }) => {
    const { logout } = useAuth();

    const handleNavClick = () => {
        if (onNavigate) onNavigate();
    };

    return (
        <div className="d-flex flex-column h-100">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none" onClick={handleNavClick}>
                <span className="fs-4 fw-bold text-gradient">Squid</span>
            </Link>
            <hr />
            <Nav className="flex-column mb-auto">
                <Nav.Item>
                    <NavLink to="/dashboard" className="nav-link" end onClick={handleNavClick}>
                        <i className="bi bi-speedometer2 me-2"></i>
                        Dashboard
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/users" className="nav-link" onClick={handleNavClick}>
                        <i className="bi bi-people me-2"></i>
                        Users
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/settings" className="nav-link" onClick={handleNavClick}>
                        <i className="bi bi-gear me-2"></i>
                        Settings
                    </NavLink>
                </Nav.Item>
            </Nav>
            <hr />
            <div className="dropdown">
                <button className="btn btn-link text-decoration-none text-danger w-100 text-start" onClick={() => { handleNavClick(); logout(); }}>
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default SidebarContent;

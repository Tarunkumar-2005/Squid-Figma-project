import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Offcanvas } from 'react-bootstrap';
import Sidebar from './Sidebar';
import SidebarContent from './SidebarContent';

const DashboardLayout = ({ children }) => {
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);

    const handleClose = () => setShowMobileSidebar(false);
    const handleShow = () => setShowMobileSidebar(true);

    return (
        <div className="d-flex">
            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Mobile Sidebar (Offcanvas) */}
            <Offcanvas show={showMobileSidebar} onHide={handleClose} responsive="md" className="sidebar">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text-gradient fw-bold">Squid</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column p-0">
                    <SidebarContent onNavigate={handleClose} />
                </Offcanvas.Body>
            </Offcanvas>

            {/* Main Content */}
            <div className="flex-grow-1" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)', transition: 'background-color 0.3s' }}>
                {/* Mobile Toggle Button (Visible only on mobile) */}
                <div className="d-md-none p-3 border-bottom d-flex align-items-center">
                    <Button variant="link" onClick={handleShow} className="p-0 text-decoration-none me-3" style={{ color: 'var(--text-color)' }}>
                        <i className="bi bi-list fs-1"></i>
                    </Button>
                    <span className="fs-4 fw-bold text-gradient">Squid</span>
                </div>

                <div className="p-4 dashboard-content" style={{ marginLeft: '0' }}>
                    <style>
                        {`
                            @media (min-width: 768px) {
                                .dashboard-content {
                                    margin-left: 250px !important;
                                }
                            }
                        `}
                    </style>
                    {children}
                </div>
            </div>
        </div>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DashboardLayout;

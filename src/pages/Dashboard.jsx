import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/ui/Card';

const Dashboard = () => {
    // Fake data
    const stats = [
        { title: 'Total Users', value: '12,345', icon: 'bi-people', color: 'primary' },
        { title: 'Active Users', value: '10,120', icon: 'bi-person-check', color: 'success' },
        { title: 'Pending Users', value: '2,225', icon: 'bi-person-dash', color: 'warning' },
        { title: 'Companies', value: '543', icon: 'bi-building', color: 'info' },
    ];

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
                <h1 className="h2 fw-bold">Welcome back, <span className="text-gradient">User</span></h1>
            </div>

            <Row>
                {stats.map((stat, index) => (
                    <Col md={6} xl={3} className="mb-4" key={index}>
                        <div className="glass-card p-4 rounded-4 h-100">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6 className="text-muted fw-normal mb-1">{stat.title}</h6>
                                    <h2 className="mb-0 fw-bold">{stat.value}</h2>
                                </div>
                                <div className={`bg-${stat.color} bg-opacity-10 p-3 rounded-circle text-${stat.color} shadow-sm`}>
                                    <i className={`bi ${stat.icon} fs-4`}></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Recent Activity chart placeholder or table could go here */}
            <Row>
                <Col md={8} className="mb-4">
                    <div className="glass-card p-4 rounded-4 h-100">
                        <h5 className="mb-4 fw-bold">Recent Activity</h5>
                        <p className="text-muted text-center py-5">Activity Chart Placeholder</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="glass-card p-4 rounded-4 h-100">
                        <h5 className="mb-4 fw-bold">System Status</h5>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <span className="badge bg-success rounded-pill p-2">Operational</span>
                            <span className="text-muted small">All systems normal</span>
                        </div>
                        <p className="text-muted text-center py-5">System metrics...</p>
                    </div>
                </Col>
            </Row>
        </DashboardLayout>
    );
};

export default Dashboard;

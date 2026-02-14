import React, { useState, useEffect } from 'react';
import { Table, Spinner, Pagination, Row, Col, Alert } from 'react-bootstrap';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Failed to fetch users');
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Filter & Sort
    const filteredUsers = users
        .filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') return a.name.localeCompare(b.name);
            return b.name.localeCompare(a.name);
        });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Users</h1>
                <Button variant="outline-secondary" size="sm" onClick={fetchUsers}>
                    <i className="bi bi-arrow-clockwise me-2"></i>Refresh
                </Button>
            </div>

            <Card className="shadow-sm border-0">
                <Row className="mb-3">
                    <Col md={6}>
                        <Input
                            id="search-users"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1); // Reset to first page on search
                            }}
                        />
                    </Col>
                    <Col md={6} className="text-md-end">
                        <div className="btn-group">
                            <Button
                                variant={sortOrder === 'asc' ? 'primary' : 'outline-primary'}
                                onClick={() => setSortOrder('asc')}
                            >
                                A-Z
                            </Button>
                            <Button
                                variant={sortOrder === 'desc' ? 'primary' : 'outline-primary'}
                                onClick={() => setSortOrder('desc')}
                            >
                                Z-A
                            </Button>
                        </div>
                    </Col>
                </Row>

                {loading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-2 text-muted">Loading users...</p>
                    </div>
                ) : error ? (
                    <Alert variant="danger">Error: {error}</Alert>
                ) : filteredUsers.length === 0 ? (
                    <div className="text-center py-5">
                        <p className="text-muted">No users found.</p>
                    </div>
                ) : (
                    <>
                        <div className="table-responsive">
                            <Table hover className="align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Company</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map(user => (
                                        <tr key={user.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="fw-bold">{user.name}</div>
                                                        <div className="text-muted small">@{user.username}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.company.name}</td>
                                            <td className="text-end">
                                                <Button variant="outline-primary" size="sm" onClick={() => handleUserClick(user)}>
                                                    View Details
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <Pagination className="justify-content-center mt-4">
                                <Pagination.Prev
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />
                                {[...Array(totalPages)].map((_, idx) => (
                                    <Pagination.Item
                                        key={idx + 1}
                                        active={idx + 1 === currentPage}
                                        onClick={() => paginate(idx + 1)}
                                    >
                                        {idx + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                />
                            </Pagination>
                        )}
                    </>
                )}
            </Card>

            {/* User Details Modal */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                title={selectedUser ? selectedUser.name : 'User Details'}
                footer={
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                }
            >
                {selectedUser && (
                    <div>
                        <div className="text-center mb-4">
                            <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                {selectedUser.name.charAt(0)}
                            </div>
                            <h5>{selectedUser.name}</h5>
                            <p className="text-muted">@{selectedUser.username}</p>
                        </div>
                        <hr />
                        <Row className="g-3">
                            <Col sm={6}>
                                <label className="text-muted small">Email</label>
                                <div>{selectedUser.email}</div>
                            </Col>
                            <Col sm={6}>
                                <label className="text-muted small">Phone</label>
                                <div>{selectedUser.phone}</div>
                            </Col>
                            <Col sm={6}>
                                <label className="text-muted small">Website</label>
                                <div><a href={`http://${selectedUser.website}`} target="_blank" rel="noreferrer">{selectedUser.website}</a></div>
                            </Col>
                            <Col sm={6}>
                                <label className="text-muted small">Company</label>
                                <div>{selectedUser.company.name}</div>
                            </Col>
                            <Col sm={12}>
                                <label className="text-muted small">Address</label>
                                <div>
                                    {selectedUser.address.street}, {selectedUser.address.suite}<br />
                                    {selectedUser.address.city}, {selectedUser.address.zipcode}
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
            </Modal>
        </DashboardLayout>
    );
};

export default Users;

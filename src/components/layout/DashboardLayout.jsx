import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-4" style={{ marginLeft: '250px', backgroundColor: 'var(--bg-color)', minHeight: '100vh', transition: 'background-color 0.3s' }}>
                {children}
            </div>
        </div>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DashboardLayout;

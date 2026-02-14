import React from 'react';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
    return (
        <div className="d-none d-md-flex flex-column flex-shrink-0 p-3 sidebar" style={{ width: '250px', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
            <SidebarContent />
        </div>
    );
};

export default Sidebar;

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children, footer, className = '', ...props }) => {
    return (
        <div className={`card ${className}`} {...props}>
            {title && <div className="card-header">{title}</div>}
            <div className="card-body">
                {children}
            </div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node,
    className: PropTypes.string,
};

export default Card;

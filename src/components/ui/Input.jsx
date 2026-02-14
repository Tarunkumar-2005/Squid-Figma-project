import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type = 'text', id, error, className = '', ...props }) => {
    return (
        <div className="mb-3">
            {label && <label htmlFor={id} className="form-label">{label}</label>}
            <input
                type={type}
                className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
                id={id}
                {...props}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    error: PropTypes.string,
    className: PropTypes.string,
};

export default Input;

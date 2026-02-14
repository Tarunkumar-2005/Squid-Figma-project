import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BsModal, Button } from 'react-bootstrap';

const Modal = ({ show, onHide, title, children, footer }) => {
    return (
        <BsModal show={show} onHide={onHide} centered>
            <BsModal.Header closeButton>
                <BsModal.Title>{title}</BsModal.Title>
            </BsModal.Header>
            <BsModal.Body>{children}</BsModal.Body>
            {footer && <BsModal.Footer>{footer}</BsModal.Footer>}
        </BsModal>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node,
};

export default Modal;

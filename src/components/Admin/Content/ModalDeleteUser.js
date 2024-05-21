import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeleteUser = (props) => {
    const {
        show,
        setShow,
        dataDelete,
        fetchListUsers,
        resetUserData
    } = props;

    const handleClose = () => {
        setShow(false);
        resetUserData();
    };

    const handleSubmitDeleteUser = () => {
        alert('Deleted');
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete user
                    <b>
                        {dataDelete && dataDelete.email
                            ? ` ${dataDelete.email}`
                            : ""
                        }
                    </b> ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSubmitDeleteUser}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;
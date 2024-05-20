import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

const ModalViewUser = (props) => {
    const {
        show,
        setShow,
        dataView,
        resetUpdateData
    } = props;

    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        console.log('>>>>Use Effect');
        if (!_.isEmpty(dataView)) {
            setEmail(dataView.email);
            setUserName(dataView.username);
            setRole(dataView.role);
            if (dataView.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
            }
        }
    }, [dataView]);

    const handleClose = () => {
        setEmail("");
        setUserName("");
        setRole("USER");
        setPreviewImage("");
        setShow(false);
        resetUpdateData();
    };

    console.log('>>>Before render: ', dataView);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-view-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>View user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form class="row g-3">
                        <div class="col-md-4">
                            <div class="img-preview">
                                {previewImage ? <img src={previewImage} alt="Preview" /> : <span>Preview Image</span>}
                            </div>
                        </div>
                        <div class="col-md-8 user-info">
                            <div class="user-info-row">
                                <label class="form-label view-user-label">User name:</label>
                                <label class="form-label view-user-label-data">{username}</label>
                            </div>
                            <div class="user-info-row">
                                <label class="form-label view-user-label">Role:</label>
                                <label class="form-label view-user-label-data">{_.isEmpty(role) ? "USER" : role}</label>
                            </div>
                            <div class="user-info-row">
                                <label class="form-label view-user-label">Email:</label>
                                <label class="form-label view-user-label-data">{email}</label>
                            </div>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ModalViewUser;
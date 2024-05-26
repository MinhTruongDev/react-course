import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

const ModalViewUser = (props) => {
    const {
        show,
        setShow,
        dataView,
        resetUserData
    } = props;

    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        // console.log('>>>>Use Effect');
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
        resetUserData();
    };

    // console.log('>>>Before render view: ', dataView);

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
                    <form className="row g-3">
                        <div className="col-md-4">
                            <div className="img-preview">
                                {previewImage ? <img src={previewImage} alt="Preview" /> : <span>Preview Image</span>}
                            </div>
                        </div>
                        <div className="col-md-8 user-info">
                            <div className="user-info-row">
                                <label className="form-label view-user-label">User name:</label>
                                <label className="form-label view-user-label-data">{username}</label>
                            </div>
                            <div className="user-info-row">
                                <label className="form-label view-user-label">Role:</label>
                                <label className="form-label view-user-label-data">{_.isEmpty(role) ? "USER" : role}</label>
                            </div>
                            <div className="user-info-row">
                                <label className="form-label view-user-label">Email:</label>
                                <label className="form-label view-user-label-data">{email}</label>
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
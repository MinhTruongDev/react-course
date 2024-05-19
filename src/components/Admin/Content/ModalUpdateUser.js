import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../services/apiService';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const {
        show,
        setShow,
        dataUpdate,
        fetchListUsers,
        resetUpdateData
    } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        console.log('>>>>Use Effect');
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email);
            setUserName(dataUpdate.username);
            setRole(dataUpdate.role);
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate]);

    const handleClose = () => {
        setEmail("");
        setPassword("");
        setUserName("");
        setRole("USER");
        setPreviewImage("");
        setImage("");
        setShow(false);
        resetUpdateData();
    };

    const handleUploadImage = (event) => {
        const ext = ['.jpg', '.jpeg', '.bmp', '.gif', '.png', '.svg'];
        if (!ext.some(el => event.target.files[0].name.endsWith(el))) {
            setPreviewImage("");
            setImage("");
        } else {
            console.log(event.target.files[0]);
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    }

    const handleSubmitUpdateUser = async () => {
        // call api
        let data = await putUpdateUser(
            dataUpdate.id,
            username,
            role,
            image);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await fetchListUsers();
        } else {
            toast.error(data.EM);
        }
    }

    console.log('>>>Before render: ', dataUpdate);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">User name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'>
                                <FcPlus /> Upload File Image
                            </label><br />
                            <input
                                id='labelUpload'
                                type="file"
                                onChange={(event) => handleUploadImage(event)}
                                hidden
                            />
                            <div className='col-md-12 img-preview'>
                                {previewImage
                                    ? <img src={previewImage} />
                                    : <span>Preview Image</span>
                                }
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ModalUpdateUser;
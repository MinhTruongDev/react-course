import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
    const [showModelCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manage-users-container">
            <div className="title">
                Manage User Title
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(!showModelCreateUser)}
                    >
                        <FcPlus />
                        Add new user</button>
                </div>
                <div className="table-users-container">
                    <TableUser />
                </div>
                <ModalCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModalCreateUser} />
            </div>
        </div>
    )
}

export default ManageUser;
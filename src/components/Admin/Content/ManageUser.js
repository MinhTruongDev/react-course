import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";

import './ManageUser.scss'
import { getAllUsers } from "../../services/apiService";
import ModalCreateUser from "./ModalCreateUser";
import TableUser from "./TableUser";

const ManageUser = (props) => {

    const [showModelCreateUser, setShowModalCreateUser] = useState(false);
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let data = await getAllUsers();
        if (data.EC === 0) {
            setListUser(data.DT);
        }
    }

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
                    <TableUser
                        listUser={listUser}
                    />
                </div>
                <ModalCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}

export default ManageUser;
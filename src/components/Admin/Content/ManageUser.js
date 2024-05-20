import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";

import './ManageUser.scss'
import { getAllUsers } from "../../services/apiService";
import TableUser from "./TableUser";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";

const ManageUser = (props) => {

    const [listUser, setListUser] = useState([]);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [userData, setUserData] = useState({});


    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let data = await getAllUsers();
        if (data.EC === 0) {
            setListUser(data.DT);
        }
    }

    const handleClickBtnUpdate = (user) => {
        console.log('>>>>>>>>>>>>>>>>>>CHECK USER: ', user);
        setShowModalUpdateUser(!showModalUpdateUser);
        setUserData(user);
    }
    const handleClickBtnView = (user) => {
        console.log('>>>>>>>>>>>>>>>>>>CHECK USER VIEW: ', user);
        setShowModalViewUser(!showModalViewUser);
        setUserData(user);
    }

    const resetUpdateData = () => {
        setUserData({});
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
                        onClick={() => setShowModalCreateUser(!showModalCreateUser)}
                    >
                        <FcPlus />Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={userData}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={userData}
                    resetUpdateData={resetUpdateData}
                />
            </div>
        </div>
    )
}

export default ManageUser;
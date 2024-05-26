import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";

import './ManageUser.scss'
import { getUserWithPaginate } from "../../services/apiService";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 5;

    const [listUser, setListUser] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [userData, setUserData] = useState({});

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    useEffect(() => {
        console.log(">>>>>>>>>>>> fetch list user");
        fetchListUsersWithPaginate(currentPage);
    }, [currentPage]);

    const fetchListUsersWithPaginate = async (page) => {
        // console.log('>>>>>>>>>>>>>PAGE: ', page);
        let data = await getUserWithPaginate(page, LIMIT_USER);
        if (data.EC === 0) {
            // console.log('Data: ', data.DT.users);
            setListUser(data.DT.users);
            setPageCount(data.DT.totalPages);
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(!showModalUpdateUser);
        setUserData(user);
    }
    const handleClickBtnView = (user) => {
        setShowModalViewUser(!showModalViewUser);
        setUserData(user);
    }
    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(!showModalDeleteUser);
        setUserData(user);
    }

    const resetUserData = () => {
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
                    <TableUserPaginate
                        listUser={listUser}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    setCurrentPage={setCurrentPage}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={userData}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    resetUserData={resetUserData}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={userData}
                    resetUserData={resetUserData}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={userData}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    resetUserData={resetUserData}
                />
            </div>
        </div>
    )
}

export default ManageUser;
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'

const ManageUser = (props) => {
    return (
        <div className="manage-users-container">
            <div className="title">
                Manage User Title
            </div>
            <div className="users-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    Table user
                </div>
                <ModalCreateUser />
            </div>
            Manage User
        </div>
    )
}

export default ManageUser;
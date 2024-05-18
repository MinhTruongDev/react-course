import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/apiService";

const TableUser = (props) => {
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
        <>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((user, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">
                                            View
                                        </button>
                                        <button className="btn btn-warning mx-3">
                                            Update
                                        </button>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={"4"}>
                                Not found user
                            </td>
                        </tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser;
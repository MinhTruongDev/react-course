import { useState } from "react";

const TableUser = (props) => {

    const { listUser } = props;

    return (
        <>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
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
                                    <th scope="row">{user.id}</th>
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
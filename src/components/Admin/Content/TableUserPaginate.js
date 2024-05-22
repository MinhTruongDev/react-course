import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import _ from 'lodash';

const TableUserPaginate = (props) => {

    const {
        listUser,
        pageCount,
        handleClickBtnView,
        handleClickBtnUpdate,
        handleClickBtnDelete,
        fetchListUsersWithPaginate
    } = props;


    const handlePageClick = (event) => {
        console.log(`User requested page number ${event.selected + 1}`);
        fetchListUsersWithPaginate(+event.selected + 1);
    };

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
                                    <td>{_.isEmpty(user.role) ? "USER" : user.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => handleClickBtnView(user)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() => handleClickBtnUpdate(user)}
                                        >
                                            Update
                                        </button>
                                        <button className="btn btn-danger"
                                            onClick={() => handleClickBtnDelete(user)}
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={"5"}>
                                Not found user
                            </td>
                        </tr>}
                </tbody>
            </table>
            <div className="user-pagination">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default TableUserPaginate;
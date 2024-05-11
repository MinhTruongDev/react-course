import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//     state = {
//         listUser: [
//             { id: 1, name: "Phan Truong", age: 25 },
//             { id: 2, name: "Phan Truong 2", age: 26 },
//             { id: 3, name: "Phan Truong 3", age: 35 },
//             { id: 4, name: "Phan Truong 4", age: 40 },
//         ]
//     };

//     handleAddNewUser = (user) => {
//         this.setState({
//             listUser: [user, ...this.state.listUser]
//         });
//     }

//     handleDeleteUser = (userId) => {
//         let listUserClone = [...this.state.listUser];
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: [...listUserClone]
//         });
//     }

//     // JSX
//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfo
//                         handleAddNewUser={this.handleAddNewUser} />
//                     <br /><br />
//                     <DisplayInfo
//                         listUser={this.state.listUser}
//                         handleDeleteUser={this.handleDeleteUser} />
//                 </div>
//                 <div className="b">Test Footer</div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUser, setListUser] = useState([
        { id: 1, name: "Phan Truong", age: 25 },
        { id: 2, name: "Phan Truong 2", age: 26 },
        { id: 3, name: "Phan Truong 3", age: 35 },
    ]);


    const handleAddNewUser = (user) => {
        setListUser([user, ...listUser]);
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUser];
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser([...listUserClone]);
    }

    return (
        <>
            <div className="a">
                <AddUserInfo
                    handleAddNewUser={handleAddNewUser} />
                <br /><br />
                <DisplayInfo
                    listUser={listUser}
                    handleDeleteUser={handleDeleteUser} />
            </div>
            <div className="b">Test Footer</div>
        </>
    );
}

export default MyComponent;

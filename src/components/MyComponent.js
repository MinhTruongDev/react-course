import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";


class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Phan Truong", age: 25 },
            { id: 2, name: "Phan Truong 2", age: 26 },
            { id: 3, name: "Phan Truong 3", age: 27 },

        ]
    };

    // JSX
    render() {
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo
                    listUser={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponent;

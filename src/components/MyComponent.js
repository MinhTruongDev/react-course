import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";


class MyComponent extends React.Component {
    // JSX
    render() {
        const myInfo = ['abc', 'bca', 'cba'];
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo name={"Phan Truong"} age={30} myInfo={myInfo} />
            </div>
        );
    }
}

export default MyComponent;
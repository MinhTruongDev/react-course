import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Trường',
        nickname: 'Agien',
        age: 25,
    };

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} but people call me {this.state.nickname}

            </div>
        );
    }
}

export default MyComponent;
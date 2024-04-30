import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Trường',
        nickname: 'Agien',
        age: 25,
    };

    handleClick(event) {
        console.log('My Name is ', this.state.name);
        // console.log(event);

    };


    handleMouseOver(event) {
        console.log(event.pageX, event.pageY);

    };

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} but people call me {this.state.nickname}
                <button onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Trường',
        nickname: 'Agien',
        age: 25,
    };

    handleClick(event) {
        console.log(`My Name is ${this.state.name} and i'm ${this.state.age}`);

        this.setState({
            name: 'Phan Trường',
            age: this.state.age + 2
        },
            () => {
                console.log(`Now i'm ${this.state.age}`);
            });
    };

    handleMouseOver = (event) => {
        console.log(event.pageX, event.pageY);

    };

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} but people call me {this.state.nickname}
                <button onClick={(event) => (this.handleClick(event))} onMouseOver={this.handleMouseOver}>Click me!!</button>
            </div>
        );
    }
}

export default MyComponent;
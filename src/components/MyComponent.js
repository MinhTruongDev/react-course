import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Trường',
        nickname: 'Agien',
        age: 25,
    };

    handleClick(event) {
        let age2 = this.state.age;
        console.log(`My Name is ${this.state.name} and i'm ${age2}`);

        this.setState({
            name: 'Phan Trường',
            age: Math.floor((Math.random() * 100) + 1)
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
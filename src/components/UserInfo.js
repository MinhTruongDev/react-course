import React from 'react';

class UserInfo extends React.Component {

    state = {
        name: 'Trường',
        nickname: 'Agien',
        age: 25,
    };

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    handleChangeAge = (event) => {
        this.setState({
            age: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                My name is <b>{this.state.name}</b> and I'm <b>{this.state.age}</b>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Your name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleChangeName(event)} />
                    <button>Submit</button>
                    <label>Your age</label>
                    <input
                        type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleChangeAge(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default UserInfo;
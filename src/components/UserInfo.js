import React from 'react';

class UserInfo extends React.Component {

    state = {
        name: 'Trường',
        nickname: 'Agien',
        age: 25,
    };

    handleChange = (event) => {
        this.setState({
            name: event.target.value

        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                My name is <b>{this.state.name}</b> but people call me <b>{this.state.nickname}</b>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Your name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleChange(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default UserInfo;
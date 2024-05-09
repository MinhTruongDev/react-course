import React from 'react';
import './DisplayInfo.scss';
import logo from './../logo.svg'

class DisplayInfo extends React.Component {

    state = {
        isShow: true
    };
    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        const { listUser } = this.props;
        return (
            <div className='display-info-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}> {this.state.isShow ? "Hide" : "Show"} list user:</span>
                </div>
                {this.state.isShow &&
                    <>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 30 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>Age: {user.age}</div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        );
    };
}

export default DisplayInfo;
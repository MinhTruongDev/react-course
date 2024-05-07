import React from 'react';
import './DisplayInfo.scss';

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
                <div>
                    <span onClick={() => { this.handleShowHide() }}> {this.state.isShow ? "Hide" : "Show"} list user:</span>
                </div>
                {this.state.isShow &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 30 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>Age: {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );
    };
}

export default DisplayInfo;
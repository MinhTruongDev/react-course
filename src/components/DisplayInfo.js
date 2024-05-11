import React from 'react';
import './DisplayInfo.scss';
import logo from './../logo.svg'

class DisplayInfo extends React.Component {

    constructor(props) {
        console.log('>> Constructor');
        super(props);
        this.state = {
            isShow: true
        }
    }

    componentDidMount() {
        console.log('> Mount');
        setTimeout(() => {
            document.title = 'Bruh';
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> Did Update:', prevProps, prevState, snapshot);
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert('Enough!!!');
            }
            if (this.props.listUser.length === 0) {
                alert('Add some more!!!');
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        console.log('>>> Render');
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
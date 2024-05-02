import React from 'react';

class DisplayInfo extends React.Component {
    render() {
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>Age: {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    };
}

export default DisplayInfo;
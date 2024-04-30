import React from 'react';

class DisplayInfo extends React.Component {
    render() {
        const { age, name, myInfo } = this.props;
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>

            </div>
        );
    };
}

export default DisplayInfo;
import React from 'react';
import './DisplayInfo.scss';

// class DisplayInfo extends React.Component {
//     render() {
//         console.log('>>> Render');
//         const { listUser } = this.props;
//         return (
//             <div className='display-info-container'>
//                 {true &&
//                     <>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age > 30 ? "green" : "red"}>
//                                     <div>My name is {user.name}</div>
//                                     <div>Age: {user.age}</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUser } = props;
    return (
        <div className='display-info-container'>
            {true &&
                <>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 30 ? "green" : "red"}>
                                <div>My name is {user.name}</div>
                                <div>Age: {user.age}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );
}

export default DisplayInfo;
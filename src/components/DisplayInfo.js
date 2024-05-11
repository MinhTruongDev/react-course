import React, { useEffect, useState } from 'react';
import './DisplayInfo.scss';

const DisplayInfo = (props) => {
    const { listUser } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    console.log('>>> render')

    useEffect(
        () => {
            if (listUser.length === 0) {
                alert(`There's no user left`);
            }
            console.log('>>>> Alert')
        }, [listUser]
    );

    useEffect(
        () => {
            setTimeout(() => {
                document.title = 'Bruh';
            }, 3000);
            console.log('>>>> Bruh')
        }, []
    );

    useEffect(
        () => {
            setTimeout(() => {
                document.title += 'Bruh';
            }, 3000);
            console.log('>>>> More Bruh')
        });

    return (
        <div className='display-info-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}> {isShowHideListUser ? "Hide" : "Show"} list user</span>
            </div>
            {isShowHideListUser &&
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
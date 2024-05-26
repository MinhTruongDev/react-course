import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";

const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        email: '',
        image: '',
        role: ''
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            // console.log(">>>>>>>CHECK ACTION", action);
            var userInfo = action?.payload?.DT;
            return {
                ...state,
                account: {
                    access_token: userInfo?.access_token,
                    refresh_token: userInfo?.refresh_token,
                    username: userInfo?.username,
                    email: userInfo?.email,
                    image: userInfo?.image,
                    role: userInfo?.role
                },
                isAuthenticated: true
            };
        default: return state;
    }
};

export default userReducer;
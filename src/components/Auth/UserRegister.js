import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import './UserRegister.scss';
import { postUserRegister } from '../services/apiService';

const UserRegister = (props) => {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfPassword, setIsShowConfPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSignUp = () => {
        // validate
        if (!validateEmail(email)) {
            toast.error('Invalid email');
            return;
        }
        if (!password && !passwordConf) {
            toast.error(`Password or Confirm password can't be empty`);
            return;
        }
        else if (password !== passwordConf) {
            toast.error('Password and Confirm password not match');
            return;
        }

        // call api
        callApiRegister();

    }

    const callApiRegister = async () => {
        let res = await postUserRegister(username, email, password);
        console.log(">>>>>>>>>>>>CHECK REGIST RESPOND: ", res);
        if (res.EC === 0) {
            toast.success(res.EM);
            navigate('/login');
        } else {
            toast.error(res.EM);
        }

    }

    const handleTogglePasword = () => {
        setIsShowPassword(!isShowPassword);
    }
    const handleTogglePaswordConf = () => {
        setIsShowConfPassword(!isShowConfPassword);
    }

    return (
        <div className="user-regist-background">
            <div className="header"></div>
            <div className="user-regist-container col-sm-8 col-md-6 col-lg-6 col-xl-4 mx-auto">
                <div className="title col-7 mx-auto">
                    MinhTruongDev
                </div>
                <div className="signin col-7 mx-auto">
                    or <span className='signin-button' onClick={() => navigate('/login')}>
                        sign in to your account
                    </span>
                </div>
                <div className="user-regist-content col-7 mx-auto">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            className="form-control"
                            type={"text"}
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type={"email"}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className='password-control-wrapper'>
                            <input
                                className="form-control password-form"
                                type={isShowPassword ? "text" : "password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <span
                                className="password-icon"
                                onClick={() => handleTogglePasword()}
                            >
                                {isShowPassword ? <IoMdEyeOff size={"1.5em"} /> : <IoMdEye size={"1.5em"} />}
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <div className='password-control-wrapper'>
                            <input
                                className="form-control password-form"
                                type={isShowConfPassword ? "text" : "password"}
                                value={passwordConf}
                                onChange={(event) => setPasswordConf(event.target.value)}
                            />
                            <span
                                className="password-icon"
                                onClick={() => handleTogglePaswordConf()}
                            >
                                {isShowConfPassword ? <IoMdEyeOff size={"1.5em"} /> : <IoMdEye size={"1.5em"} />}
                            </span>
                        </div>
                    </div>
                    <div>
                        <button
                            className='btn-submit'
                            onClick={() => handleSignUp()}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRegister;
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ImSpinner } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';

import { postLogin } from '../services/apiService';
import './Login.scss'
import { doLogin } from '../../redux/action/userAction';

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginEmail = useSelector(state => state.loginUser.loginEmail);
    // console.log(">>>>>>>LOGIN EMAIL: ", loginEmail);

    const [email, setEmail] = useState(loginEmail ?? "");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleTogglePasword = () => {
        setIsShowPassword(!isShowPassword);
    }

    const handleLogin = async () => {
        // validate
        if (!email || !validateEmail(email)) {
            toast.error('Invalid email');
            return;
        }

        if (!password) {
            toast.error('Invalid password!');
            return;
        }

        setIsLoading(true);
        //call api
        let res = await postLogin(email, password);

        if (res && res.EC === 0) {
            dispatch(doLogin({ data: res.DT }));
            toast.success(res.EM);
            setIsLoading(false);
            navigate('/');
        } else {
            toast.error(res.EM);
            setIsLoading(false);
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button
                    className='btn-submit'
                    onClick={() => handleRegister()}
                >
                    Sign up
                </button>
            </div>
            <div className='title col-2 mx-auto'>
                MinhTruongDev
            </div>
            <div className='welcome col-2 mx-auto'>
                New phone, who's this?
            </div>
            <div className='content-form col-2 mx-auto' >
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
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
                <span className='forgor-password'>Forgor password?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoading}
                    >
                        {isLoading && <ImSpinner className='loader-icon' />}
                        <span>Login to MinhTruongDev</span>
                    </button>
                </div>
                <div className='text-center'>
                    <span
                        className='back'
                        onClick={() => { navigate('/') }}>
                        &#60;&#60;Go to Hompage
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login
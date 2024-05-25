import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { postLogin } from '../services/apiService';
import './Login.scss'

const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleTogglePasword = () => {
        setIsShowPassword(!isShowPassword);
    }

    const handleLogin = async () => {
        // validate

        //call api
        let res = await postLogin(email, password);
        console.log(">>>>>>>>>>>>>>>>> Check LOGIN: ", res);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            navigate('/');
        } else {
            toast.error(res.EM);
        }
    }

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
                    >
                        Login to MinhTruongDev
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
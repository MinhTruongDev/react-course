import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { postLogin } from '../services/apiService';
import './Login.scss'

const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button
                    className='btn-submit'
                    onClick={() => handleLogin()}
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
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type={"password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
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
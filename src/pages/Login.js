import { userFile } from '../data/userFile';
import { useParams } from 'react-router-dom';
import '../styles/Login.css';
import image_input from './icons/image-input.svg';

const Login = () => {
    return (
        <div className='login-form-container'>
            <div className='login-form-content'>
                <span className='login-title'>Eco Fridgely</span>
                <div className='login-form'>
                    <form className='login-form-form'>
                        <input className='login-input' type='e-mail' placeholder='E-mail' />
                        <input className='login-input' type='password' placeholder='Password' />
                    </form>
                    <a href='/passwordReinitialization' className='login-forgot-password'>
                        <span>Forgot your password ?</span>
                    </a>
                    <a href='/register' className='login-register-link'>
                        <span>Don't have an account ? Register !</span>
                    </a>
                </div>
                <a href='/homepage'>
                    <button className='login-button'>Sign in</button>
                </a>
            </div>
        </div>

    );
}

export default Login;
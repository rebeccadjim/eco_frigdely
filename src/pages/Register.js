import { userFile } from '../data/userFile';
import { useParams } from 'react-router-dom';
import '../styles/Register.css';
import image_input from './icons/image-input.svg';

const Register = () => {
    return (
        <div className='register-form-container'>
            <div className='register-form-content'>
                <span className='register-title'>Eco Fridgely</span>
                <div className='register-form'>
                    <form className='register-form-form'>
                        <input className='register-input' type='text' placeholder='Type your name' />
                        <input className='register-input' type='e-mail' placeholder='Type your e-mail' />
                        <input className='register-input' type='password' placeholder='Type your password' />
                        <input className='register-input' type='password' placeholder='Confirm your password' />
                        <input className='register-input' type='file' id='file' />
                        <label className='register-image-input' htmlFor='file'>
                            <img src={image_input} alt=''></img>
                            <span>Add an avatar</span>
                        </label>
                    </form>
                </div>
                <div>
                    <a href='/homepage'>
                        <button className='register-button'>Sign up</button>
                    </a>
                    <a href='/login'>
                        <button className='register-login-button'>Already have an account ? Login </button>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Register;
import './MessageBox.css'
import { userFile } from '../../data/userFile';
import { useParams } from 'react-router-dom';

const MessageBox = () => {
    return (
        <div className='message-container'>
            <div className='message-header-container'>
                <div className='message-header'>

                </div>
            </div>
            <div className='message-display-container'>
                <div className='message-display-content'>

                </div>
            </div>
        </div>
    );
}

export default MessageBox;
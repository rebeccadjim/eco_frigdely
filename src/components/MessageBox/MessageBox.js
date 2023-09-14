import './MessageBox.css'
import { userFile } from '../../data/userFile';
import { useParams } from 'react-router-dom';
import dots from '../icons/ellipsis-horizontal-outline.svg';
import image_input from '../icons/image-input.svg';
import sent_icon from '../icons/send-sharp.svg';
import Message from '../Message/Message';

const MessageBox = () => {
    return (
        <div className='message-container'>
            <div className='message-header-container'>
                <div className='message-header'>
                    <div className='friend-header-infos'>
                        <img className='friend-profile-pic-msg' src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt='' />
                        <span>John</span>
                    </div>
                    <div className='user-message-infos'>
                        <img className='user-message-infos-image' src={dots} alt=''  >
                        </img>
                    </div>
                </div>
            </div>
            <div className='message-display-container'>
                <div className='message-display-content'>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
            </div>
            <div className='message-type-area-container'>
                <div className='message-type-area'>
                    <input className='message-type-container' type='text' placeholder='Type your message...'>
                    </input>
                    <input className='message-image-input' type='file' id='file' />
                    <div className='message-icons'>
                        <label className='message-image-input-img' htmlFor='file'>
                            <img src={image_input} alt=''></img>
                        </label>
                        <img className='sent-icon-image' src={sent_icon} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageBox;
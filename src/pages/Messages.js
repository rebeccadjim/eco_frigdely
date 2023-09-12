import '../styles/Messages.css'
import { userFile } from '../data/userFile';
import { useParams } from 'react-router-dom';
import friends from './icons/friends.svg';
import search_logo from './icons/search_logo.svg';
import ChatList from '../components/ChatList/ChatList';
import MessageBox from '../components/MessageBox/MessageBox';

function Message() {

    const { name } = useParams();
    const userInfo = userFile.find((userInfo) => userInfo.name === name);

    return (
        <div className='message-page-container'>
            <div className='message-page-content'>
                <div className='chat-list'>
                    <ChatList/>
                </div>
                <div className='message-box'>
                    <MessageBox/>
                </div>
            </div>
        </div>
    );
}

export default Message;
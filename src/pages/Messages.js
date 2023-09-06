import '../styles/Messages.css'
import { userFile } from '../data/userFile';
import { useParams } from 'react-router-dom';
import friends from './icons/friends.svg';
import search_logo from './icons/search_logo.svg';

function Message() {

    const { name } = useParams();
    const userInfo = userFile.find((userInfo) => userInfo.name === name);

    return (
        <div className='message-page-container'>
            <div className='message-page-content'>
                <div className='friends-list-container'>
                    <div className='friends-content'>
                        <div className='friends-list-header'>
                            <img className='friends-image' src={friends} alt=''/>
                            <div className='message-title'>
                                Your conversations
                            </div>
                        </div>
                        <div className='search-friend-container'>
                            <img className='search-icon' src={search_logo} alt=''/>
                            <input className='search-friend-bar'type="search" placeholder="Search a conversation"/>
                        </div>
                        <div className='friends-chats-container'>
                            
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    );
}

export default Message;
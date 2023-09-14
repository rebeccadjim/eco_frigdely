import { userFile } from '../../data/userFile';
import { useParams } from 'react-router-dom';
import friends from '../icons/friends.svg';
import search_logo from '../icons/search_logo.svg';
import './ChatList.css';


const ChatList = () => {
    return (
        <div className='friends-list-container'>
            <div className='friends-content'>
                <div className='friends-list-header'>
                    <img className='friends-image' src={friends} alt='' />
                    <div className='message-title'>
                        Your conversations
                    </div>
                </div>
                <div className='search-friend-container'>
                    <img className='search-icon' src={search_logo} alt='' />
                    <input className='search-friend-bar' type="search" placeholder="Search a conversation" />
                </div>
                <div className='friends-chats-container'>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                    <div className='friend-chat'>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=''/>
                        <div className='friend-info'>
                            <span>John</span>
                            <p> Hi !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ChatList;
import React, { useEffect, useRef, useState } from 'react'
import photo from './kamil.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FriendChat = ({isFocused}) => {
    const [chatVisibility, setChatVisibility] = useState(false);
    const clickHandle = () => {
        setChatVisibility(!chatVisibility);
    }

    return (
    <div className='chat-op-box'>
        <div className='photo-box'>
            <img className='chat-photo rounded-circle' onClick={clickHandle} src={photo} alt='' />
            <span></span>
        </div>
        
        <div style={{ width: isFocused ? '120px' : '0px' }} onClick={clickHandle} className='chat-name-box'><div className='chatName'>Kamil Lewiński</div></div>
        <div className='messages-chat'  style={{ display: chatVisibility ? 'flex' : 'none'}}>
            <div className='messages-space'>
                <div className='message-left'>
                    <div className='message-box'>Cześć Kamil Co tam u Ciebie?</div>
                </div>
                <div className='message-right'>
                    <div className='message-box'>Cześć Marta całkiem nieźle</div>
                </div>
                <div className='message-right'>
                    <div className='message-box'>A ty?</div>
                </div>
                <div className='message-right'>
                    <div className='message-box'>A ty?</div>
                </div>
                <div className='message-right'>
                    <div className='message-box'>A ty?</div>
                </div>
                <div className='message-right'>
                    <div className='message-box'>Cześć Marta całkiem nieźle</div>
                </div>
                <div className='message-right'>
                    <div className='message-box'>Cześć Marta całkiem nieźle</div>
                </div>
                <div className='message-right'>
                    <div className='message-box'>xDDDDD</div>
                </div>

            </div>
            <div className='writing-messages-space'>
                <textarea>

                </textarea>
                <ArrowForwardIosIcon />
            </div>
        </div>
    </div>

)
}

export default FriendChat

import React, { useState } from 'react'
import './Messages.scss'
import Messagebox from './Messagebox'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Messages = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className='messages-box'>
        <div className='chats-space'>
            
            <div className='chat-but'><Messagebox /></div>
            <div className='chat-but' id='chosen'><Messagebox /></div>
            <div className='chat-but'><Messagebox /></div>
        </div>
        
        
        <div className='chat-space'>
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
            </div>
            <div className='writing-messages-space'>
                <textarea></textarea>
                <ArrowForwardIosIcon />
            </div>
        </div>

    </div>
  )
}

export default Messages

import React, { useState } from 'react'
import './Messages.scss'
import Messagebox from './Messagebox'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Messages = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className='messages-box'>
        <div className='chats-space'>
            
            <Messagebox />
            <Messagebox />
            <Messagebox />
        </div>
        
        
        <div className='chat-space'>
            <div className='messages-space'>

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

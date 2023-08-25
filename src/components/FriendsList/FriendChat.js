import React from 'react'
import photo from './kamil.jpg'
const FriendChat = ({isFocused}) => {

    return (
    <div className='chat-op-box'>
        <div className='photo-box'>
            <img className='chat-photo rounded-circle' src={photo} alt='' />
            <span></span>
        </div>
        
        <div style={{ width: isFocused ? '120px' : '0px' }} className='chat-name-box'><div className='chatName'>Kamil Lewiński</div></div>
    </div>
  )
}

export default FriendChat

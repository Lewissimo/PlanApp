import React from 'react'
import photo from './kamil.jpg'
const FriendChat = ({isFocused}) => {

    return (
    <div className='chat-op-box'>
        <img className='chat-photo rounded-circle' src={photo} alt='' />
        <div style={{ width: isFocused ? '120px' : '0px' }} className='chat-name-box'>Kamil Lewiński</div>
    </div>
  )
}

export default FriendChat

import React from 'react'
import testPhoto from '../FriendsList/kamil.jpg'


const Message_box = () => {
  return (
    <div className='message-box'>
        <div className='chat-compo-box'> 
          <img src={testPhoto} alt='' className='message-photo' />
          <div className='name-box'>
            Kamil Lewiński
          </div>
        </div>
    </div>
  )
}

export default Message_box

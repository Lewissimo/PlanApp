import React from 'react'
import photo from '../FriendsList/kamil.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import TextsmsIcon from '@mui/icons-material/Textsms';
const FriendOption = ({option}) => {
    console.log(option);
  return (
    <div className='col-12 col-sm-6 col-lg-4 col-xl-2'>
        <div className='friend-option'>
            <div className='photo-container'>
                <img src={photo} alt='' />
                
                {option === 'addFriend'?
                <div className='op-ico-container add-remove-container'>
                    <PersonAddIcon />
                </div>
                :
                <>
                <div className='op-ico-container add-remove-container'>
                    <PersonRemoveIcon />
                </div>
                <div className='op-ico-container mess-s-container'>
                    <TextsmsIcon />
                </div>
                </>
                }
            </div>
            <div>
            <div className='name'>
                Kamil Lewiński
            </div>

            </div>
        </div>
    </div>
  )
}

export default FriendOption

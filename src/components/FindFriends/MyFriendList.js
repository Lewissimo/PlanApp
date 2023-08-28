import React from 'react'
import FriendOption from './FriendOption'
import Search from '../FriendsList/Search'

const MyFriendList = () => {
  return (
    <div className='potential-friend friend-op-box'>
        <div className='search-container'>
            <Search />
        </div>
        <div className='pop-friend-list row'>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
                <FriendOption option={'myFriend'}/>
        </div>
    </div>
  )
}

export default MyFriendList

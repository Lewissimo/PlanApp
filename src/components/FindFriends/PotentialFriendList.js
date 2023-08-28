import React from 'react'
import Search from '../FriendsList/Search'
import FriendOption from './FriendOption'

const PotentialFriendList = () => {
  return (
    <div className='potential-friend friend-op-box'>
        <div className='search-container'>
            <Search />
        </div>
        <div className='pop-friend-list row'>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
                <FriendOption option={'addFriend'}/>
        </div>
    </div>
  )
}

export default PotentialFriendList

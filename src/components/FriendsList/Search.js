import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './FriendList.scss';
const Search = ({isFocused, setIsFocused}) => {
  const onFocusHandle = () => {
    setIsFocused(true)
  }

  return (
    <div class="navbar-brand">
            <input style={{ width: isFocused ? '200px' : '60px' }} onFocus={onFocusHandle} className='f-search-inp search-inp inp-text' type='search' />
        <SearchIcon className='but1 search-icon'/>      
    </div>
  )
}

export default Search

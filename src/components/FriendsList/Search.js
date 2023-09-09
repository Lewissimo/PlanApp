import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './FriendList.scss';
const Search = ({isFocused, setIsFocused, chatSearch, setIsACchat_visible}) => {
  const onFocusHandle = () => {
    console.log(setIsACchat_visible)
    if(setIsACchat_visible){
      setIsACchat_visible(true);
    }
    setIsFocused(true)
  }

  const onBlurHandle = ()=>{
    if(setIsACchat_visible){
      setIsACchat_visible(false);
    }
  }

  return (
    <div className="navbar-brand">
        {chatSearch?
            <input style={{ width: isFocused ? '200px' : '60px' }} onFocus={onFocusHandle} onBlur={onBlurHandle} className='f-search-inp search-inp inp-text' type='search' />
          :
          <input  className='f-search-inp search-inp inp-text' type='search' />
        }
            <SearchIcon className='but1 search-icon'/>      
    </div>
  )
}

export default Search

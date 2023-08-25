import React, { useEffect, useState } from 'react'
import '../Header.scss'
import Search from './Search'
import FriendChat from './FriendChat'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { width } from '@mui/system';
const FriendsList = () => {
  console.log(window.innerWidth);
  const [isInit, setIsInit] = useState(true);
  const [isFocused, setIsFocused] = useState(); 
  
  const [screenState, setScreenState] = useState((window.innerWidthh < 992) ? 'small' : 'huge' );
  
  
  useEffect(()=>{
    
    if(isInit){
      if(window.innerWidth < 992){
        setIsFocused(true);
      }
      else{
        setIsFocused(false);
      }
      setIsInit(false);
    }


    const handleResize = ()=>{
      
          if( (window.innerWidth < 992) && (screenState === 'huge')){ 
  
          console.log('in small');
          setIsFocused(true);
          setScreenState('small');
        }
        if (window.innerWidth >= 992 && (screenState === 'small')){
          console.log('in huge');
  
          setIsFocused(false);
          setScreenState('huge');
        }
        
    }
    window.addEventListener('resize', handleResize);
  },[isFocused, setIsFocused, screenState, setScreenState])
    
  

  return (
    <div className='friendsListBox'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div className='d-none d-lg-block'><Search  isFocused={isFocused} setIsFocused={setIsFocused}  /></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#friendList" aria-controls="friendList" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="friendList">
      <ul class="navbar-nav">
  
        <li className='nav-item d-block d-lg-none'>
          <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        </li>

        <li class="nav-item">
          <FriendChat isFocused = {isFocused} />
        </li>
        <li class="nav-item">
          <FriendChat isFocused = {isFocused} />
        </li>
        <li class="nav-item">
          <FriendChat isFocused = {isFocused} />
        </li>
        <li class="nav-item">
          <FriendChat isFocused = {isFocused} />
        </li>
        <li class="nav-item">
            <div className='switchArrow' onClick={()=>{setIsFocused(!isFocused)}}>
              {isFocused ? <ArrowBackIosNewIcon className='d-none d-lg-block' /> : <ArrowForwardIosIcon className='d-none d-lg-block' />}
            </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default FriendsList

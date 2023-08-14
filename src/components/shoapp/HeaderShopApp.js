import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
const HeaderShopApp = () => {
  return (
    <div className='header-shopApp-box'>
        <Link to='/' className='back-icon but1'><ArrowBackIosNewIcon /></Link>
        <div className='search-inp-box'>
            <input className='search-inp inp-text' type='text' />
            <SearchIcon className='but1 search-icon'/>
        </div>
    </div>
  )
}

export default HeaderShopApp

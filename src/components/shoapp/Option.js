import React from 'react'
import './ShopApp.scss'
import AddIcon from '@mui/icons-material/Add';
const Option = () => {
  return (
    <div className='option-box'>
                <div className='row'>
               
                    <div className='col-3'><img src={require('./photos/maslo.jpg')} width='100' alt='maslo' /></div>
                    <div className='col-9 row op-info-box'>
                        <div className='col-12 col-sm-4'>Masło</div>
                        <div className='col-12 col-sm-4'>5,99</div>
                        <div className='col-12 col-sm-4'><button className='add-button but1'><AddIcon /></button></div>
                    </div>
                </div>
      
    </div>
  )
}

export default Option

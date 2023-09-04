import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Stylesset = () => {
  return (
    <div className='style-settings'>
        <Card>
            <Card.Header>
                <p>Stylizacja</p>
            </Card.Header>
            <Card.Body>
                <input type='checkbox' id='base-colors-button' />
                <label htmlFor='base-colors-button'>
                    <div className='color-inp-wrapper'>
                        <label htmlFor='color1'>Kolor 1</label>
                        <input id='color1' type='color' />
                    </div>
                    <div className='color-inp-wrapper'>
                        <label htmlFor='color2'>Kolor 2</label>
                        <input id='color2' type='color' />
                    </div>
                    <div className='color-inp-wrapper'>
                        <label htmlFor='color3'>Kolor 3</label>
                        <input id='color3' type='color' />
                    </div>
                    <div className='color-inp-wrapper'>
                        <label htmlFor='color4'>Kolor 4</label>
                        <input id='color4' type='color' />
                    </div>
                    <div className='color-inp-wrapper'>
                        <label htmlFor='color5'>Kolor 5</label>
                        <input id='color5' type='color' />
                    </div>
                </label>
                <Button className='w-100 mt-2'>Przywróć ustawienia początkowe</Button>
            </Card.Body>
        </Card>

    </div>
  )
}

export default Stylesset

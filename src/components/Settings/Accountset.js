import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import photo from '../nophoto.png'

const Accountset = () => {
    const [isProfPhotoAdded, setIsProfPhotoAdded] =  useState(true);
  return (
    <div className='account-settings'>
        <Card>
            <Card.Header>
                <p>Ustawienia konta</p>
            </Card.Header>
            <Card.Body>
                <div className='set-content'>
                    <input type='checkbox' id='password-change-button' />
                    <label htmlFor='password-change-button'>Zmień hasło</label>
                    <Form className='change-password-form' id='inp-hidden-content'>
                        <Form.Group>
                            <Form.Label>
                                Nowe hasło
                            </Form.Label>
                            <Form.Control  type='password' className='name-inp' id='change-pass-first-pass' required />
                            <Form.Label>
                                Powtórz nowe hasło
                            </Form.Label>
                            <Form.Control  type='password' className='name-inp' id='change-pass-first-pass' required />
                            <Button type='submit'className='w-100'>Zmień hasło</Button>
                        </Form.Group>
                    </Form>
                    <input type='checkbox' id='profPhoto-change-button' />
                    <label htmlFor='profPhoto-change-button'>
                    {isProfPhotoAdded ?
                        <p>Dodaj zdjęcie profilowe</p>
                    :
                        <p>Zmień zdjęcie profilowe</p>
                    }
                    </label>
                    <Form className='add-profile-photo' id='inp-hidden-content-prof'>
                            <img id='prof-photo' src={photo} alt=''/>
                        <Form.Group>
                            <Form.Control  type='file' className='prof-inp' id='add-prof-photo' required />
                            <Button type='submit'className='w-100'>Dodaj zdjęcie</Button>
                        </Form.Group>
                    </Form>

                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Accountset

import React, { useRef, useState } from 'react'
import { Card, Button, Form} from 'react-bootstrap'; 
import './App.scss';
import { useAuth } from './firebase-config/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';





const SignIn = ({logRegMess, removeWheelHandle}) => {
    
    const auth = useAuth();
    
    

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [buttonState, setButtonState] = useState('initial');
    const animButton = () => {
        setButtonState('clicked');
        setTimeout(() => {
            setButtonState('initial');
        }, 800);
    }


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await setButtonState('waiting')
        const signInResult = await auth.signIn(emailRef.current.value, passwordRef.current.value);
        
        if(signInResult === -1){
            logRegMess('Zweryfikuj swój adres email');
            animButton();
        }
        if(signInResult === 0){
            await removeWheelHandle();
            navigate('/');
        }
        if(signInResult === 1){
            logRegMess('Nieprawidłona nazwa lub hasło konta');
            animButton();
        }
        
        
        

    }

  return (
    <>
        <Card className='card-form'>
            <Card.Body>
                <h2 className='text-center'>Zaloguj się</h2>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Login
                        </Form.Label>
                        <Form.Control type='email' ref={ emailRef } required />
                        <Form.Label>
                            Hasło
                        </Form.Label>
                        <Form.Control type='password' ref={ passwordRef } required />
                        {buttonState==='waiting'?<div className='circBox'><CircularProgress className='progressSign' /></div>:<Button type='submit' className={buttonState==='clicked'?'clicked w-100 mt-3':'w-100 mt-3'}>Logowanie</Button>}
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}

export default SignIn

import React, { useRef, useState } from 'react'
import { Card, Button, Form} from 'react-bootstrap'; 
import './App.scss';
import { useAuth } from './firebase-config/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';


const Register = ({swiper, logRegMess}) => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    const formButton = useRef();
    const auth = useAuth();
    const [buttonState, setButtonState] = useState('initial');
    const [f_nameTextInpState, setF_NameTextInpState] = useState('');
    const [l_nameTextInpState, setL_NameTextInpState] = useState('');
    const [mail_textInpState, setMainTextInpState] = useState('');
    const inputLettersFormat = (e) => {
        
        const deleteWhiteSpace = (text) => {
            return text.replace(/\s/g, '');
        }

        if (e.target.id === 'f_name'){
            const transformedTxt = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
            setF_NameTextInpState(deleteWhiteSpace(transformedTxt));
            return
        }
        if (e.target.id === 'l_name'){
            const transformedTxt = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
            setL_NameTextInpState(deleteWhiteSpace(transformedTxt));
            return
        }

        if(e.target.id === 'm_text'){
            const transformedTxt = e.target.value.toLowerCase();
            setMainTextInpState(deleteWhiteSpace(transformedTxt));
            return
        }


    }


    const animButton = () => {
        setButtonState('clicked');
        setTimeout(() => {
            setButtonState('initial');
        }, 800);
    }

     const handleSubmit = async (e) => {
        
        e.preventDefault();
        await setButtonState('waiting');
        const regResult = await auth.singUp(emailRef.current.value, passwordRef.current.value, repeatPasswordRef.current.value, f_nameTextInpState, l_nameTextInpState);
        if (regResult === 0) {
            console.log(auth.user);

            setButtonState('initial');
            logRegMess('Rejestracja Pomyślna'); 
            swiper.slideTo(1);
        }
        if (regResult === 1){
            logRegMess('Hasła nie pasują do siebie');
            animButton();
        }
        if (regResult === 2){
            logRegMess('Podany email jest już zajęty');
            animButton();
        }
        if(regResult === 3){
            logRegMess('Hasło powinno zawierać przynajmniej 8 znaków')
            animButton();
        }
        if(regResult === 4){
            logRegMess('Rejestracja nie powiodła się z powodu nieznanego błędu')
            animButton();
        }
        console.log(auth.currentUser);
    }



  return (
    <>
        <Card className='card-form'>
            <Card.Body>
                <h2 className='text-center'>Zarejestruj się</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Imię
                        </Form.Label>
                        <Form.Control type='text' className='name-inp' onChange={inputLettersFormat} id='f_name' value={f_nameTextInpState} ref={ firstNameRef } required />
                        <Form.Label>
                            Nazwisko
                        </Form.Label>
                        <Form.Control type='text' className='name-inp' onChange={inputLettersFormat} id='l_name'  value={l_nameTextInpState} ref={ lastNameRef } required />
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control type='email' ref={ emailRef } onChange={inputLettersFormat} id='m_text'  value={mail_textInpState}  required />
                        <Form.Label>
                            Hasło
                        </Form.Label>
                        <Form.Control type='password' ref={ passwordRef } required />
                        <Form.Label>
                            Powtórz hasło
                        </Form.Label>
                        <Form.Control type='password' ref={ repeatPasswordRef } required />
                        {buttonState==='waiting'?<div className='circBox'><CircularProgress className='progressSign' /></div>:<Button ref={formButton} type='submit' className={buttonState==='clicked'?'clicked w-100 mt-3':'w-100 mt-3'}>Rejestracja</Button>}
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}

export default Register
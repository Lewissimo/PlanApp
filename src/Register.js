import React, { useRef } from 'react'
import { Card, Button, Form} from 'react-bootstrap'; 
import './App.scss';
import { auth } from './firebase-config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';



const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

     const handleSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    }

  return (
    <>
        <Card className='card-form'>
            <Card.Body>
                <h2 className='text-center'>Zarejestruj się</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control type='email' ref={ emailRef } required />
                        <Form.Label>
                            Hasło
                        </Form.Label>
                        <Form.Control type='password' ref={ passwordRef } required />
                        <Form.Label>
                            Powtórz hasło
                        </Form.Label>
                        <Form.Control type='password' ref={ repeatPasswordRef } required />
                        <Button type='submit' className='w-100 mt-3'>Rejestracja</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}

export default Register
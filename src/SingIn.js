import React, { useRef } from 'react'
import { Card, Button, Form} from 'react-bootstrap'; 
import './App.scss';
const SingIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
  return (
    <>
        <Card className='card-form'>
            <Card.Body>
                <h2 className='text-center'>Zaloguj się</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Login
                        </Form.Label>
                        <Form.Control type='email' ref={ emailRef } required />
                        <Form.Label>
                            Hasło
                        </Form.Label>
                        <Form.Control type='password' ref={ passwordRef } required />
                        <Button type='submit' className='w-100 mt-3'>Logowanie</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}

export default SingIn

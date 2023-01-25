import React, { useState } from 'react'

import { Link,useNavigate } from 'react-router-dom'

import { auth } from '../../data/firebase.js';

import './Register.css'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate ();
  
  
  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // if successfully created an account
      console.log(auth);
      if(auth) {
        navigate('/');
      }
    }).catch(error => setEmail(error.message.slice(9)));
  }

  return (
    <div className='register'>
        <div className='register__container'>
            <h1 className='register__text'>Register</h1>
            <h3 className='register__text'>Email</h3>
            <input className='register__input' value={email} onChange={e => setEmail(e.target.value)} placeholder='email...' type='text'></input>

            <h3 className='register__text'>Password</h3>
            <input className='register__input' value={password} onChange={e => setPassword(e.target.value)} placeholder='password...' type='password'></input>

            <button className='register__button' onClick={register}>Register</button>

            <section className='register__noAccountContainer'>
                <p>Already have an account?</p>
                <Link to='/login'>
                    <button className='register__registerAccount'>Login</button>
                </Link>
            </section>
        </div>
    </div>
  )
}

export default Register

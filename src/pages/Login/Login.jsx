import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../../data/firebase.js';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate ();


  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      if(auth) {
        navigate('/');
      }
    }).catch(error => setEmail(error.message.slice(9)));
  }

  return (
    <div className='login'>
        <div className='login__container'>
            <h1 className='login__text'>Login</h1>
            <h3 className='login__text'>Email</h3>
            <input className='login__input' value={email} onChange={e => setEmail(e.target.value)} placeholder='email...' type='text'></input>

            <h3 className='login__text'>Password</h3>
            <input className='login__input' value={password} onChange={e => setPassword(e.target.value)} placeholder='password...' type='password'></input>

            <button className='login__button' type='submit' onClick={signIn}>Login</button>

            <section className='login__noAccountContainer'>
                <p>Don't have an account?</p>
                <Link to='/register'>
                    <button className='login__registerAccount'>Register</button>
                </Link>
            </section>
        </div>
    </div>
  )
}

export default Login

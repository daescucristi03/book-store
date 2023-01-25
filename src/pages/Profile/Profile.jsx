import React from 'react'

import './Profile.css'

import { auth } from '../../data/firebase.js';
import { useStatevalue } from '../../components/StateProvider/StateProvider';

import { Link,useNavigate } from 'react-router-dom'


function Profile() {
  const [{basket, user}, dispatch] = useStatevalue();
  const navigate = useNavigate ();

  const handleSignOut = () => {
    if(user) {
      auth.signOut();
      navigate('/login');
    }
  }

  return (
    <div className='profile'>
      <div className='profile__container'>
        <section className='profile__info'>
          <div className='profile__cardsContainer'>
            <h1 className='profile__title'>Hi, {user.email}</h1>
            <button className='profile__signOutButton' onClick={handleSignOut}>Sign out</button>
          </div>
            <div className='profile__activity'>

              {/* <div className='profile__cards'>
                <div className='profile__cardsContainer'>
                  <h1 className='profile__title'>My cards</h1>
                  <button className='profile__editSection'>Edit</button>
                </div>
              </div>

              <div className='profile__shippingAdresses'>
                <div className='profile__cardsContainer'>
                  <h1 className='profile__title'>My Adresses</h1>
                  <button className='profile__editSection'>Edit</button>
                </div>
              </div>
              
              <div className='profile__buyHistory'>
                <h1 className='profile__title'>Purchase History</h1>
              </div> */}

            </div>

        </section>
      </div>
    </div>
  )
}

export default Profile

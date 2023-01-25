import React from 'react'

import './Header.css'


function Header() {
  
  return (
    <div className='header'>
        <section className='header__container'>
            <div className='header__text'>
              <h1>Your new book collection</h1>
              <p>Shop now</p>
              <div className='header__buttonContainer'>
                
              </div>
            </div>

            <img alt='header__image' className='header__image' src={'/header.jpeg'}></img>
        </section>
    </div>
  )
}

export default Header


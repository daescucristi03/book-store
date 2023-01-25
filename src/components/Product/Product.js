import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStatevalue } from '../StateProvider/StateProvider';

import './Product.css'

function Product({id, title, author, description, price, rating, image, category, isBestSeller}) {
  const [ { basket }, dispatch ] = useStatevalue();
  
  const addToBasket = () => {
    // dispatch item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        author: author,
        description: description,
        price: price,
        rating: rating,
        image: image,
        category: category,
        isBestSeller: isBestSeller
      }
    })
  }

  return (
    <div className='product'>
      <div className='product__container'>
        <button className='product__button' onClick={addToBasket}>
        <img alt='product' className='product__image' src={`/products/${image}`}/>
        </button>
      </div>
    </div>
  )
}

export default Product

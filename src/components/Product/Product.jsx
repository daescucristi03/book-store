import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStatevalue } from '../StateProvider/StateProvider';

import './Product.css'

function Product({id, title, author, description, price, rating, image, category, isBestSeller, buyLink}) {
  const [ { basket }, dispatch ] = useStatevalue();
  
  const openProductPage = () => {
    // dispatch item into the data layer
    dispatch({
      type: 'SELECT_PRODUCT',
      item: {
        id: id,
        title: title,
        author: author,
        description: description,
        price: price,
        rating: rating,
        image: image,
        category: category,
        isBestSeller: isBestSeller,
        buyLink: buyLink
      }
    })
  }

  return (
    <div className='product'>
      <Link to="/product" className='product__container' onClick={openProductPage}>
        <img alt='product' className='product__image' src={`/products/${image}`}/>
      </Link>
    </div>
  )
}

export default Product

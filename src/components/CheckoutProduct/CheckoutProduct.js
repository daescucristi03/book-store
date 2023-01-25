import React from 'react'

import './CheckoutProduct.css'

import { useStatevalue } from '../StateProvider/StateProvider';

function CheckoutProduct({id, title, author, description, price, rating, image, category, isBestSeller}) {
  const [ { basket }, dispatch ] = useStatevalue();

  const removeFromBasket = () => {
    //remove the item from basket

    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
    <div className='checkoutProduct'>
        <img alt='product' className='checkoutProduct__image' src={`/products/${image}`}/>

        <section className='checkoutProduct__infoContainer'>
          <h3 className='checkoutProduct__title'>{title}</h3>
          <h5 className='checkoutProduct__text'>by {author}</h5>
          <h5 className='checkoutProduct__text'>Price: ${price}</h5>

          <button className='checkoutProduct__removeItemButton' onClick={removeFromBasket}>Remove from cart</button>
        </section>
    </div>
  )
}

export default CheckoutProduct

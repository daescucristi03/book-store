import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { useStatevalue } from '../../components/StateProvider/StateProvider'

import { stockData } from '../../data/database'
import { getBasketTotal } from '../../data/reducer'


import './Cart.css'

function Cart() {
  const [ { basket }, dispatch ] = useStatevalue();

  return (
    <div className='cart'>
        <div className='cart__container'>
            <div className='cart__items'>
                <h3>Your have {basket?.length} items in the cart.</h3>
                <hr className='cart__totalLine'></hr>
                {basket.map(item => (
                    <CheckoutProduct 
                      id={item.id}
                      title = {item.title}
                      author = {item.author}
                      description = {item.description}
                      price = {item.price}
                      rating = {item.rating}
                      image= {item.image}
                      category = {item.category}
                      isBestSeller = {item.isBestSeller}
                      >
                    </CheckoutProduct>
                ))}
            </div>  
            <div className='cart__checkout'>
                <h3>Checkout ({basket?.length} items):</h3>

                <CurrencyFormat renderText={(value) => (
                  <>
                    <p>
                      Total: {value}
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                ></CurrencyFormat>
                <hr className='cart__totalLine'></hr>

              <Link to='/'>
                <button className='cart__checkoutButton'>Checkout</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Cart

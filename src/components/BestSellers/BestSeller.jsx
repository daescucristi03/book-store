import React from 'react'


import './BestSeller.css'

import { stockData } from '../../data/database'
import Product from '../Product/Product'


function BestSeller() {
  return (
    <div className='bestSeller'>
        <h1 className='bestSeller__title'>Best Sellers</h1>
        <hr></hr>
        <div className='bestSeller__container'>
            { stockData.map((data, key) => {
                if(data.isBestSeller === "true") {
                    return (
                        <Product 
                        key={key}
                        title = {data.title}
                        author = {data.author}
                        description = {data.description}
                        price = {data.price}
                        rating = {data.rating}
                        image = {data.image}
                        category = {data.category}
                        isBestSeller = {data.isBestSeller}
                        />
                    )
                }
            })}
{/* 
            <Product 
            image = "product_05.jpeg"
            /> */}
        </div>
    </div>
  )
}

export default BestSeller

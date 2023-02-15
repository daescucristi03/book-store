import React, { useState } from 'react'

import './ProductGrid.css'
import Product from '../Product/Product'
import { stockData } from '../../data/database'

function ProductGrid() {
    const options = [
        {value: 'All', text: 'All'},
        {value: 'History', text: 'History'},
        {value: 'Art', text: 'Art & Architecture'},
        {value: 'Filosophy', text: 'Philosophy'},
      ];
    
      const [selected, setSelected] = useState(options[0].value);
    
      const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
      };

  return (
    <div className='productGrid'>
        <div className='productGrid__filterContainer'>
            <select className='productGrid__filter' value={selected} onChange={handleChange}>
                {options.map(option => (
                    <option className='productGrid__filterOption' key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
        <div className='productGrid__container'>
        { stockData.map((data, key) => {
            if(data.category === selected || selected === "All") {
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
                    buyLink = {data.buyLink}
                    />
                )   
            }
        })}
        </div>
    </div>
  )
}

export default ProductGrid


// 117 -> n
// 25


// display ( i * 25 -> (i+1) * 25)
// i = ( 0 -> n / 25 ) -> no rest
// i = ( 0 -> n / 25 + 1) -> with rest

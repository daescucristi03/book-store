import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStatevalue } from '../../components/StateProvider/StateProvider'

import './ProductPage.css'

function ProductPage() {
  const [{activeProduct}, dispatch] = useStatevalue();
  const navigate = useNavigate();
    
  useEffect(() => {
    if(activeProduct.title === undefined) {
        navigate('/');
    }
  });

    return (  
    <div className='productPage'>
      <div className='productPage__container'>
        <img className='productPage__image' alt='product' src={`/products/${activeProduct.image}`}/>
      </div>
      <div className='productPage__container'>
        <h1 className='productPage__element'>{activeProduct.title}</h1>
        <h3 className='productPage__element'>{activeProduct.author}</h3>
        <p className='productPage__element'>{activeProduct.description}</p>
        <a className='productPage__button' href={activeProduct.buyLink}>Get from here</a>
      </div>
    </div>
  )
}

export default ProductPage

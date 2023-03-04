import React from 'react';
import "./Products.css"

const Products = ({productItems , handleAddProduct}) => {
  return (
    <div className='products'>
      {productItems.map((productItems)=>(
        <div className='card-main'>
           
            <div>
                <img className='product-image' src={productItems.image} alt={productItems.name }></img>
            </div>

            <div>
                <h3 className='product.name'>{productItems.name}</h3>
            </div>

            <div className='product-price'>  ₹ {productItems.price}/- Only
            </div>

            <div>
                <button className='product-add-button' onClick={()=> handleAddProduct(productItems)} >Add to Cart</button>
            </div>

            <div>
                <a href={productItems.link} target="_blank">know more</a>
            </div>

        </div>       
      ))}
    </div>    
  )
}

export default Products

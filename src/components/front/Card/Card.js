import React from 'react';
import "./Card.css"

const Cart = ({ cartItems , handleAddProduct , handleRemoveProduct, handleCartClearance }) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='Card'>
        <div className='clear-card'>
            {cartItems.length >= 1 && (
                <button className='clear-button' onClick={handleCartClearance}>Clear Cart</button>
            )}
        </div>

        {cartItems.length === 0 &&(
            <div className='card-empty'>No items are added </div>
        )}

        <div>
            {cartItems.map((item)=>(
                <div key={item.id} className="card-list" >
                    <img className='card-image' src={item.image} alt={item.name} />

                    <div className='card-name'>{item.name}</div>
                    <div className='card-functon'>
                        <button className='card-add' onClick={()=> handleAddProduct(item)}>+</button>
                        <button className='card-remove' onClick={()=> handleRemoveProduct(item)} >-</button>

                    </div>
                    <div className='card-price'>
                        {item.quantity} *  ₹ {item.price}
                    </div>

                </div>
            ))}
        </div>
        <div className='card-totalprice-main'>
                Total price
                {cartItems.length >= 1 && (
                <div className='card-totalprice'>
                ₹ {totalPrice}/- Only
                </div>
                )}
        </div> 
        <div className='order'>
        {cartItems.length >= 1 && (
        <button className='place-order'>Place order</button>
        )}
    </div>                         
    </div>  
  )
  
}

export default Cart

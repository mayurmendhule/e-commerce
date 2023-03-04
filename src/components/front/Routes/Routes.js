import React from 'react';
import Products from '../Products/Products';
import Card from '../Card/Card';
import { Routes , Route } from 'react-router-dom';

const Rts = ({productItems , cartItems , handleAddProduct , handleRemoveProduct , handleCartClearance}) => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Products productItems={productItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
        />}></Route>

        <Route exact path='/card' element = 
        {< Card cartItems={cartItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct} 
        handleCartClearance={handleCartClearance}
        />}>
        </Route>

      </Routes>
    </div>
  )
}

export default Rts

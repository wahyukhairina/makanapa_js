import React from 'react';
import{ connect } from 'react-redux';
import { addCart } from "./redux/actions/cart";
import '../App.css';
// import { connect } from 'react-redux'
// import { addCart } from './redux/actions/cart'

const ProductItem = ({
    products, 
    dispatch,
    total, 
    cart,
}) => {

    const onAddCart = (e) => {
        let i;
        cart.map((cart) => {
          if (cart.id === products.id) {
            i = 0;
            return alert("Product have been added");
          }
          return products;
        });
    
        if (i !== 0) {
          const InitialTotal = total;
          e.preventDefault();
          const product = products;
          product.qty = 1;
          product.total = InitialTotal + product.price;
          dispatch(addCart(product));
        }
    }

    return (
        <div className='col-md-4' key='products.id'>
        <div class="card card-food">
        <img class="card-img-top" src={products.image} onClick={onAddCart} alt="Food" />
        <div class="card-body">
          <div className='card-title'>{products.name}</div>
          <div>{products.price}</div>
        </div>
      
      </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        total: state.cart.total,
        cart: state.cart.cart,
    }
}

export default connect (mapStateToProps) (ProductItem);
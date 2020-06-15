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

  const convertToRupiah = (angka) => {
      var rupiah = "";
      var angkarev = angka.toString().split("").reverse().join("");
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
      return (
        "Rp. " +
        rupiah
          .split("", rupiah.length - 1)
          .reverse()
          .join("") +
        ",-"
      );
    }

    return (
        <div className='col-md-4' key='products.id'>
        <div class="card card-food">
        <div className='card-view'>
        <img class="card-image card-img-top" src={products.image} onClick={onAddCart} alt="Food" />
        </div>
        <div class="card-body">
          <div className='card-title'>{products.name}</div>
          <div>{convertToRupiah (products.price)}</div>
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
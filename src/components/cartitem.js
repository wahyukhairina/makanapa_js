import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addQty, reduceQty, removeItem } from './redux/actions/cart'

class CartItem extends Component {
    state = {
        total: null,
    }

    addQuantity =async (cart) => {
        console.log('function', cart.price)
        const initialTotal = this.props.total
        if(cart.stock >= cart.qty){
          const total = initialTotal + cart.price
          cart.total = total
        await  this.props.dispatch(addQty(cart))
         
       }
       else(
         alert('Stock unsufficient!')
       )
      }
     
      reduceQuantity = async (cart) => {
        const initialTotal = this.props.total
        if ( cart.qty > 1) {
         const total = initialTotal - cart.price
         cart.total = total
         await this.props.dispatch(reduceQty(cart))
     
         }
      }

      removeItem = (cart) => {
        const initialTotal = this.props.total
        const total = initialTotal - (cart.qty * cart.price)
        cart.total = total
        this.props.dispatch(removeItem(cart))
      }

      render () {
        const { cart } = this.props
        console.log(cart, 'cart')
        const initialTotal = this.props.total
          return (
              <>
              {cart.length !==0 ?
              <div>
                   {cart.map((cart) =>
              <div className="container-cart">
              <div className="cart-item">
                <img className="cart-image" src={cart.image} alt="cart item" />
              </div>
              <div className="cart-detail">
                <div className="item-name">{cart.name}</div>
                <div className="amount">
                  <div className="add"> + </div>
                  <div className="quantity"> {cart.qty} </div>
                  <div className="reduce"> - </div>
                </div>
              </div>

              <div className="price"> {cart.price} </div>
            </div>
                   )}
            </div>
              :
              <div>
              <img src="https://i.ibb.co/Ms8Rk6z/shopping-cart.jpg" style={{width: 250 , height: 250 }} alt="empty-cart" border="0"></img>
              <ul style={{ marginLeft: '50px'}}>Your cart is empty</ul>
              </div>
              }
              </>
          )
      }
       
}

const mapStateToProps = (state) => {

    return {
      cart: state.cart.cart,
      total : state.cart.total
    }
  }
export default connect(mapStateToProps)(CartItem) 
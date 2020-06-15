import React, { Component } from "react";
import { connect } from "react-redux";
import { addQty, reduceQty, removeItem } from "./redux/actions/cart";
import { AiOutlineCloseCircle } from "react-icons/ai";

class CartItem extends Component {
  state = {
    total: null,
    show: false,
  };

  addQuantity = async (cart) => {
    console.log("function", cart.price);
    const initialTotal = this.props.total;
    if (cart.stock >= cart.qty) {
      const total = initialTotal + cart.price;
      cart.total = total;
      await this.props.dispatch(addQty(cart));
    } else alert("Stock unsufficient!");
  };

  reduceQuantity = async (cart) => {
    const initialTotal = this.props.total;
    if (cart.qty > 1) {
      const total = initialTotal - cart.price;
      cart.total = total;
      await this.props.dispatch(reduceQty(cart));
    }
  };

  convertToRupiah(angka) {
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

  removeItem = (cart) => {
    const initialTotal = this.props.total;
    const total = initialTotal - cart.qty * cart.price;
    cart.total = total;
    this.props.dispatch(removeItem(cart));
  };

  render() {
    const { cart } = this.props;
    const initialTotal = this.props.total;

    return (
      <>
        {cart.length !== 0 ? (
          <div className="cart-item">
            {cart.map((cart) => (
              <div className="items" key={cart.id}>
                <div className="items-image">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      marginLeft: "1%",
                    }}
                    alt="item image"
                    src={cart.image}
                  />
                </div>
                <div className="items-detail">
                  <div className="items-name"> {cart.name}</div>
                  <div className="detail">
                    <div className="reduce"><button onClick={() => this.reduceQuantity(cart)} >-</button></div>
                    <div className="qty">{cart.qty} </div>
                    <div className="add"><button onClick={() => this.addQuantity(cart)}>+</button>  </div>
                  </div>
                </div>
                <div className="items-remove">
                  <AiOutlineCloseCircle onClick={()=> this.removeItem(cart)} size={25}/>
                </div>
              </div>
            ))}
            <div className='checkout'>
            <div className='total' style={{ paddingTop: "10px" }}>
              <div>Total : {this.convertToRupiah(initialTotal)}</div>
            </div>
            <div className='checkout-button'>
                    <button> Checkout</button>
            </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <img
              src="https://i.ibb.co/Ms8Rk6z/shopping-cart.jpg"
              className="image-cart"
              alt="empty-cart"
              border="0"
            ></img>
            <div>Your cart is empty</div>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    total: state.cart.total,
  };
};
export default connect(mapStateToProps)(CartItem);

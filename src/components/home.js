import React, { Component } from "react";
import { FaHamburger, FaPizzaSlice, FaFish, FaRegStar } from "react-icons/fa";
import {
  GiSteak,
  GiPineapple,
  GiNoodles,
  GiHamburgerMenu,
} from "react-icons/gi";
import { IoIosIceCream, IoIosSearch } from "react-icons/io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import "../App.css";
import foto from "../image/header.png";
import food from "../image/food.jpg";
import { connect } from "react-redux";
import { getProducts } from '../components/redux/actions/product'
import ProductItem from './productitem'

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(getProducts())
  }
  render() {
    const { products } = this.props
    const ItemProducts = products.map(products => (
      <ProductItem 
      products = { products}
      key = { products.id}
      />
    ))
    return (
      <>
        <div className="container-main">
          <div className="navbar">
            <GiHamburgerMenu size={"2%"} />
            <div>makanapa</div>
            {/* <i className="fa fa-user-circle fa-2x"></i> */}
            <nav class="navbar navbar-light bg-light">
              <form class="form-inline">
                <input
                  className="form-control search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <IoIosSearch size={"5%"} />
              </form>
            </nav>
            <div className="dropdown">
              <a
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              <AiOutlineUser size={"100%"} />
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Login
                </a>
                <a class="dropdown-item" href="#">
                  Register
                </a>
              </div>
            </div>
            <AiOutlineShoppingCart size={"2%"} />
          </div>
          <div className="container-content">
            <div className="container-left">
              <div className="header-image">
                <img src={foto} class="image-header" alt="free delivery"></img>
              </div>
              <div className="category">
                <div>Restaurants</div>
                <div className="list-category">
                  <div className="item-category">
                    <div className="item">
                      <FaRegStar size={"70%"} />
                    </div>
                    <div className="item">All</div>
                  </div>
                  <div className="item-category">
                    <div className="item">
                      <FaPizzaSlice size={"70%"} />
                    </div>
                    <div className="item">Pizza</div>
                  </div>
                  <div className="item-category">
                    <div className="item">
                      <GiNoodles size={"70%"} />
                    </div>
                    <div className="item">Asian</div>
                  </div>
                  <div className="item-category">
                    <div className="item">
                      <FaHamburger size={"70%"} />
                    </div>
                    <div className="item">Burgers</div>
                  </div>
                  <div className="item-category">
                    <div className="item">
                      <GiSteak size={"70%"} />
                    </div>
                    <div className="item">Barbecue</div>
                  </div>
                  <div className="item-category">
                    <div className="item">
                      <IoIosIceCream size={"80%"} />
                    </div>
                    <div className="item">Desserts</div>
                  </div>

                  <div className="item-category">
                    <div className="item">
                      <GiPineapple size={"75%"} />
                    </div>
                    <div className="item">Thai</div>
                  </div>

                  <div className="item-category">
                    <div className="item">
                      <FaFish size={"70%"} />
                    </div>
                    <div className="item">Sushi</div>
                  </div>
                </div>
              </div>
              <div className="product-list">
                <div className='row'>
                  {ItemProducts}
                </div>
              
              
              
              </div>
            </div>
            <div className="container-right">
              <div className="address">
                <div className="myorder">My Order</div>
                <div class="card card-address">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bu lk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cart">
                Cart
                <div className="container-cart">
                  <div className="cart-item">
                    <img className="cart-image" src={food} alt="cart item" />
                  </div>
                  <div className="cart-detail">
                    <div className="item-name"> Strawberry Yougurt</div>
                    <div className="amount">
                      <div className="add"> + </div>
                      <div className="quantity"> 1 </div>
                      <div className="reduce"> - </div>
                    </div>
                  </div>

                  <div className="price"> price </div>
                </div>
              </div>
              <div className="total">
                <div className="total-price">
                  <div className="total-text">Total</div>
                  <div className="price-tag">$25.3</div>
                </div>
                <div className="container-checkout">
                  <div className="checkout">
                    <div className="kosong"></div>
                    <div className="checkout-text"> Checkout </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return{
    products: state.products.products
  }
}
export default connect(mapStateToProps)(Home);

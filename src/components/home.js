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
import { connect } from "react-redux";
import { getProducts } from "../components/redux/actions/product";
import ProductItem from "./productitem";
import CartItem from "./cartitem";

class Home extends Component {
  componentDidMount() {
    this.getProducts();
  }

  getProducts(data) {
    this.props.dispatch(getProducts(data));
  }
  render() {
    const { products } = this.props;
    const ItemProducts = products.map((products) => (
      <ProductItem products={products} key={products.id} />
    ));
    return (
      <>
        <div className="container container-main">
          <div className="navbar">
            <GiHamburgerMenu size={"2%"} />
            <div className="title">makanapa</div>
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
                <div className="title-mini">Restaurants</div>
                <div className="list-category">
                  <button
                    onClick={() => this.getProducts("")}
                    className="item-category"
                  >
                    <div className="item">
                      <FaRegStar size={"70%"} />
                    </div>
                    <div className="item">All</div>
                  </button>
                  <button
                    onClick={() => this.getProducts("Pasta")}
                    className="item-category"
                  >
                    <div className="item">
                      <FaPizzaSlice size={"70%"} />
                    </div>
                    <div className="item">Pasta</div>
                  </button>
                  <button
                    onClick={() => this.getProducts("Asian")}
                    className="item-category"
                  >
                    <div className="item">
                      <GiNoodles size={"70%"} />
                    </div>
                    <div className="item">Asian</div>
                  </button>
                  <button
                    onClick={() => this.getProducts("Burgers")}
                    className="item-category"
                  >
                    <div className="item">
                      <FaHamburger size={"70%"} />
                    </div>
                    <div className="item">Burgers</div>
                  </button>
                  <button
                    onClick={() => this.getProducts("Barbecue")}
                    className="item-category"
                  >
                    <div className="item">
                      <GiSteak size={"70%"} />
                    </div>
                    <div className="item">Barbecue</div>
                  </button>
                  <button
                    onClick={() => this.getProducts("Desserts")}
                    className="item-category"
                  >
                    <div className="item">
                      <IoIosIceCream size={"80%"} />
                    </div>
                    <div className="item">Desserts</div>
                  </button>

                  <button
                    onClick={() => this.getProducts("Thai")}
                    className="item-category"
                  >
                    <div className="item">
                      <GiPineapple size={"75%"} />
                    </div>
                    <div className="item">Thai</div>
                  </button>

                  <button
                    onClick={() => this.getProducts("Sushi")}
                    className="item-category"
                  >
                    <div className="item">
                      <FaFish size={"70%"} />
                    </div>
                    <div className="item">Sushi</div>
                  </button>
                </div>
              </div>
              <div className="product-list">
                {products.length !== 0 ? (
                  <div className="row">{ItemProducts}</div>
                ) : (
                  <div className="coming-soon">The Food is Coming Soon</div>
                )}
              </div>
            </div>
            <div className="container-right">
              <div className="cart title-mini">
                <div>Cart</div>
              </div>

              <CartItem />
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
export default connect(mapStateToProps)(Home);

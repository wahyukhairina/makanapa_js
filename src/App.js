import React from 'react';
import './App.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import foto from './image/header.png'
import food from './image/food.jpg'
function App() {
  return (
    <>
      <div className='container-main'>
        <div className='navbar'>
          <div>
            makanapa
          </div>
          {/* <i className="fa fa-user-circle fa-2x"></i> */}
          <nav class="navbar navbar-light bg-light">
            <i class="fas fa-user"></i>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
        </div>
        <div className='container-content'>
          <div className='container-left'>
            <div className='header-image'>
              <img src={foto} class='image-header' alt='free delivery'></img>
            </div>
            <div className='category'>
              <div>Restaurants</div>
              Category
          </div>
            <div className='product-list'>
              <div class="card card-food">
                <img class="card-img-top" src={food} alt="Food" />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card card-food">
                <img class="card-img-top" src={food} alt="Food" />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card card-food">
                <img class="card-img-top" src={food} alt="Food" />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='container-right'>
            <div className='address'>

              <div className='myorder'>My Order</div>
              <div class="card card-address">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='cart'>
              Cart
              <div className="container-cart">
                <div className='cart-item'>
                  <img className='cart-image' src={food} alt='cart item' />
                </div>
                <div className="cart-detail">
                  <div className='item-name'> Strawberry Yougurt</div>
                  <div className='amount'>
                    <div className='add'> + </div>
                    <div className='quantity'> 1 </div>
                    <div className='reduce'> - </div>
                  </div>
                </div>

                <div className='price'> price </div>
              </div>
            </div>
            <div className='total'>
              <div className='total-price'>
                <div className='total-text'>
                  Total
                </div>
                <div className='price-tag'>
                  $25.3
                </div>
              </div>
              <div className='container-checkout'>
              <div className='checkout'>
                Checkout
              </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

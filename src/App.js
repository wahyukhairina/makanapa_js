import React from 'react';
import './App.css';
function App() {
  return (
    <>
    <div className='container-main'>
      <div className='navbar'>
        Navbar
      </div>
      <div className='container-content'>
        <div className='container-left'>
          <div className='header-image'>
            Header Image
          </div>
          <div className='category'>
            Category
          </div>
          <div className='product-list'>
            Product List
          </div>
        </div>
        <div className='container-right'>
          <div className='address'>
            Address
          </div>
          <div className='cart'>
            Cart
          </div>
          <div className='total'>
            Total
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

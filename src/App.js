import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home'
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <>
    <Provider store = { store}>
     <Router>
       <Route exact path='/' component={Home} />
     </Router>
     </Provider>
    </>
  );
}

export default App;

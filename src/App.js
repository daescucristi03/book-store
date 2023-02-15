import './assets/css/App.css'

import Navbar from './components/Navbar/Navbar'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import ProductPage from './pages/Product/ProductPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';

import { useEffect } from 'react';
import { auth } from './data/firebase';
import { useStatevalue } from './components/StateProvider/StateProvider';


function App() {
  const [{}, dispatch] = useStatevalue();

  useEffect(() => {
    // will only run once, when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('USER: ', authUser);

      if(authUser) {
        // the user is logged in or was logged in

        dispatch(
          {
            type: "SET_USER",
            user: authUser
          }
        )
      } else {
        // the user is logged out

        dispatch(
          {
            type: "SET_USER",
            user: null
          }
        )
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route path='/profile' element={<Profile />}> </Route>
          <Route path='/register' element={<Register />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/product' element={<ProductPage />}> </Route>
          <Route path='/checkout' element={<Checkout />}> </Route>
          <Route path='/cart' element={<Cart />}> </Route>
          <Route path='/products' element={<Products />}> </Route>
          <Route path='/' element={<Home />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

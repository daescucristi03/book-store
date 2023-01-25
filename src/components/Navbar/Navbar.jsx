import React from 'react'

// import styles
import './Navbar.css'

// import icons
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';

// import react libraries
import {Link} from "react-router-dom";
import { useStatevalue } from '../StateProvider/StateProvider';

function Navbar() {
  const [{basket, user}, dispatch] = useStatevalue();

  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <Link to='/' className='navbar__item'>
                <HomeIcon className='navbar__icon'/>
                <p className='navbar__text'>Home</p>
            </Link>

            <Link to='/products' className='navbar__item'>
                <MenuBookIcon className='navbar__icon'/>
                <p className='navbar__text'>Products</p>
            </Link>

            <Link to='/cart' className='navbar__item'>
                <ShoppingCartIcon className='navbar__icon'/>
                <p className='navbar__text'>Cart</p>
            </Link>

            <Link to={user ? '/profile' : '/login'} className='navbar__item'>
                <PersonIcon className='navbar__icon'/>
                <p className='navbar__text'>Profile</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar

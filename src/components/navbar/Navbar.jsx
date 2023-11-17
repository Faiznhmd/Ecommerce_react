import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';

import './Navbar.css';

const Navbar = () => {
  const [menu, SetMenu] = useState('shop');

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav_menu">
        <li
          onClick={() => {
            SetMenu('Shop');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/">
            Shop
          </Link>
          {menu === 'Shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            SetMenu('Mens');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/mens">
            Men
          </Link>
          {menu === 'Mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            SetMenu('Womens');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/womens">
            Womens
          </Link>
          {menu === 'Womens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            SetMenu('Kids');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/kids">
            Kids
          </Link>{' '}
          {menu === 'Kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav_login_cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav_cart_count">0</div>
      </div>
    </div>
  );
};

export default Navbar;

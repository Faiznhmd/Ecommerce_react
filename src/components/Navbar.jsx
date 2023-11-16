import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

import './Navbar.css';
import { useState } from 'react';

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
          Shop {menu === 'Shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            SetMenu('Mens');
          }}
        >
          Mens {menu === 'Mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            SetMenu('Womens');
          }}
        >
          Womens {menu === 'Womens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            SetMenu('Kids');
          }}
        >
          Kids {menu === 'Kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav_login_cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav_cart_count">0</div>
      </div>
    </div>
  );
};

export default Navbar;

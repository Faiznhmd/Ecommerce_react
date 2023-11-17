import exclusive_img from '../../Assets/exclusive_image.png';

import './Offer.css';

const Offer = () => {
  return (
    <div className="offer">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers_right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offer;

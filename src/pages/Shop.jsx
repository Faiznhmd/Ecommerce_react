import NewCollection from '../components/NewCollection/NewCollection';
import Popular from '../components/Popular/Popular';
import Hero from '../components/hero/Hero';
import Offer from '../components/offers/Offer';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
    </div>
  );
};

export default Shop;

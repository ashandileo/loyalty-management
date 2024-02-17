import Banner from '../components/Home/Banner';
import Header from '../components/Home/Header';
import LatestPromo from '../components/Home/LatestPromo';
import PopularMerchant from '../components/Home/PopularMerchant';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <LatestPromo />
      <PopularMerchant />
    </>
  );
};

export default Home;

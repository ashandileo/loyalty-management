import Banner from '../components/Home/Banner';
import Header from '../components/Home/Header';
import LatestPromo from '../components/Home/LatestPromo';
import PopularMerchant from '../components/Home/PopularMerchant';
import PopularRewards from '../components/Home/PopularRewards';
import Preview from '../components/Home/Preview';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <LatestPromo />
      <PopularMerchant />
      <PopularRewards />
      <Preview />
    </>
  );
};

export default Home;

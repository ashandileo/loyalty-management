import Banner from '../components/Home/Banner';
import LatestPromo from '../components/Home/LatestPromo';
import PopularMerchant from '../components/Home/PopularMerchant';
import PopularRewards from '../components/Home/PopularRewards';
import Preview from '../components/Home/Preview';
import HomeLayout from '../components/Layout/HomeLayout/HomeLayout';

const Home = () => {
  return (
    <HomeLayout>
      <Banner />
      <LatestPromo />
      <PopularMerchant />
      <PopularRewards />
      <Preview />
    </HomeLayout>
  );
};

export default Home;

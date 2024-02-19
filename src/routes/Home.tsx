import Banner from '../components/Home/Banner';
import LatestPromo from '../components/Home/LatestPromo';
import PopularMerchant from '../components/Home/PopularMerchant';
import PopularRewards from '../components/Home/PopularRewards';
import Preview from '../components/Home/Preview';
import HomeLayout from '../components/Layout/HomeLayout/HomeLayout';
import AnimatePage from '../components/shared/AnimatePage/AnimatePage';

const Home = () => {
  return (
    <HomeLayout>
      <AnimatePage>
        <Banner />
        <LatestPromo />
        <PopularMerchant />
        <PopularRewards />
        <Preview />
      </AnimatePage>
    </HomeLayout>
  );
};

export default Home;

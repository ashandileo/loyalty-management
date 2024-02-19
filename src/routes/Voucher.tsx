import HomeLayout from '../components/Layout/HomeLayout/HomeLayout';
import Banner from '../components/Voucher/Banner';
import Promo from '../components/Voucher/Promo';
import VoucherDetail from '../components/Voucher/VoucherDetail';
import VoucherNavigation from '../components/Voucher/VoucherNavigation/VoucherNavigation';
import AnimatePage from '../components/shared/AnimatePage/AnimatePage';

const Voucher = () => {
  return (
    <HomeLayout lightHeader>
      <VoucherNavigation />
      <AnimatePage>
        <div className="bg-[#F9F9F9] pb-[100px]">
          <Banner />
          <VoucherDetail />
          <Promo />
        </div>
      </AnimatePage>
    </HomeLayout>
  );
};

export default Voucher;

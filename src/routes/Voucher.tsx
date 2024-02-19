import HomeLayout from '../components/Layout/HomeLayout/HomeLayout';
import Banner from '../components/Voucher/Banner';
import Promo from '../components/Voucher/Promo';
import VoucherDetail from '../components/Voucher/VoucherDetail';

const Voucher = () => {
  return (
    <HomeLayout hideHeader>
      <div className="bg-[#F9F9F9] pb-[100px]">
        <Banner />
        <VoucherDetail />
        <Promo />
      </div>
    </HomeLayout>
  );
};

export default Voucher;

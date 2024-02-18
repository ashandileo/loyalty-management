import HomeLayout from '../components/Layout/HomeLayout/HomeLayout';
import Banner from '../components/Voucher/Banner';
import VoucherDetail from '../components/Voucher/VoucherDetail';

const Voucher = () => {
  return (
    <HomeLayout hideHeader>
      <Banner />
      <VoucherDetail />
    </HomeLayout>
  );
};

export default Voucher;

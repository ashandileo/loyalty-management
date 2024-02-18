import VoucherDate from './VoucherDate';
import VoucherDescription from './VoucherDescription';
import VoucherName from './VoucherName';

const VoucherDetail = () => {
  return (
    <div className="w-full bg-[#F9F9F9] pb-[100px]">
      <div className="w-[994px] bg-white mx-[auto] mt-[-240px] relative z-[1] rounded-[20px] p-[24px]">
        <VoucherName />
        <VoucherDate />
        <VoucherDescription />
      </div>
    </div>
  );
};

export default VoucherDetail;

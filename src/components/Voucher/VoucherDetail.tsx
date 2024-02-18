import voucherDetailData from '../../fixtures/voucher-detail';
import VoucherBenefit from './VoucherBenefit/VoucherBenefit';
import VoucherDate from './VoucherDate/VoucherDate';
import VoucherDescription from './VoucherDescription/VoucherDescription';
import VoucherGuide from './VoucherGuide/VoucherGuide';
import VoucherName from './VoucherName/VoucherName';

const VoucherDetail = () => {
  const {
    merchantLogo,
    merchantName,
    name,
    expireDate,
    description,
    benefit,
    guide
  } = voucherDetailData;

  return (
    <div className="w-full bg-[#F9F9F9] pb-[100px]">
      <div className="w-[994px] bg-white mx-[auto] mt-[-240px] relative z-[1] rounded-[20px] p-[24px]">
        <VoucherName
          merchantLogo={merchantLogo}
          merchantName={merchantName}
          voucherName={name}
        />
        <VoucherDate expireDate={expireDate} />
        <VoucherDescription description={description} />
        <VoucherBenefit benefit={benefit} />
        <VoucherGuide guide={guide} />
      </div>
    </div>
  );
};

export default VoucherDetail;

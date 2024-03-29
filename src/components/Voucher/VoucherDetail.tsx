import voucherDetailData from '../../fixtures/voucher-detail';
import VoucherBenefit from './VoucherBenefit/VoucherBenefit';
import VoucherDate from './VoucherDate/VoucherDate';
import VoucherDescription from './VoucherDescription/VoucherDescription';
import VoucherGuide from './VoucherGuide/VoucherGuide';
import VoucherName from './VoucherName/VoucherName';
import VoucherTermCondition from './VoucherTermCondition/VoucherTermCondition';

const VoucherDetail = () => {
  const {
    merchantLogo,
    merchantName,
    name,
    expireDate,
    description,
    benefit,
    guide,
    termCondition
  } = voucherDetailData;

  return (
    <div className="w-full">
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
        <VoucherTermCondition termCondition={termCondition} />
      </div>
    </div>
  );
};

export default VoucherDetail;

import Divider from '../../shared/Divider/Divider';
import { IVoucherName } from './Interface';

const VoucherName = ({
  merchantLogo,
  merchantName,
  voucherName
}: IVoucherName) => {
  return (
    <>
      <div className="flex items-center mb-[8px]">
        <img
          src="/images/starbucks.svg"
          className="w-[24px] h-[24px] mr-[8px]"
          alt="Starbucks"
        />
        <p className="plus-jakarta-sans font-[400] text-[16px] leading-[17.6px] text-[#272A2D]">
          Starbucks
        </p>
      </div>
      <p className="plus-jakarta-sans font-[600] text-[20px] leading-[31.2px] text-[#272A2D] mb-[16px]">
        STARBUCKS BUY ONE GET ONE
      </p>
      <Divider />
    </>
  );
};

export default VoucherName;

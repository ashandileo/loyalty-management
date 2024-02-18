import SVGIcon from '../../shared/SVGIcon/SVGIcon';
import { IVoucherDate } from './Interface';

const VoucherDate = ({ expireDate }: IVoucherDate) => {
  return (
    <div className="mt-[16px] flex items-center mb-[16px]">
      <div className="w-[40px] h-[40px] bg-[#FAFAFA] flex items-center justify-center rounded-[8px] mr-[12px]">
        <SVGIcon name="icon-calendar" width={20} height={20} />
      </div>
      <div>
        <p className="plus-jakarta-sans font-[500] text-[12px] leading-[20.4px] text-[#D9D9D9] mb-[2px]">
          Expiry date
        </p>
        <p className="plus-jakarta-sans font-[500] text-[12px] leading-[20.4px] text-[#272A2D]">
          {expireDate}
        </p>
      </div>
    </div>
  );
};

export default VoucherDate;

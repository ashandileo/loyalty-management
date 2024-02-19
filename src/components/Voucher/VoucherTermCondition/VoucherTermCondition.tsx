import { IVoucherTermCondition } from './Interface';

const VoucherTermCondition = ({ termCondition }: IVoucherTermCondition) => {
  return (
    <div className="mt-[32px]" id="terms-and-condition">
      <p className="plus-jakarta-sans font-[700] text-[16px] leading-[24px] text-[#272A2D] mb-[12px]">
        How to get
      </p>

      <div className="flex flex-col gap-[24px]">
        {termCondition.map((item, index) => (
          <div className="flex items-start gap-[10px]" key={index}>
            <p className="plus-jakarta-sans font-[400] text-[14px] leading-[23.8px] text-[#272A2D]">
              {`${index + 1}.`}
            </p>
            <p className="plus-jakarta-sans font-[400] text-[14px] leading-[23.8px] text-[#272A2D]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherTermCondition;

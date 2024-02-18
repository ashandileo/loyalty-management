import { IVoucherBenefit } from './Interface';

const VoucherBenefit = ({ benefit }: IVoucherBenefit) => {
  return (
    <div className="mt-[32px]">
      <p className="plus-jakarta-sans font-[700] text-[16px] leading-[24px] text-[#272A2D] mb-[12px]">
        Benefit
      </p>

      <div className="flex flex-col gap-[24px]">
        {benefit.map((item, index) => (
          <div className="flex items-start gap-[10px]" key={index}>
            <div className="min-w-[6px] min-h-[6px] bg-[#272A2D] rounded-full" />
            <div className="mt-[-10px]">
              <p className="plus-jakarta-sans font-[700] text-[14px] leading-[23.8px] text-[#272A2D]">
                {item.title}
              </p>
              <p className="plus-jakarta-sans font-[400] text-[14px] leading-[23.8px] text-[#272A2D]">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherBenefit;

import { IVoucherGuide } from './Interface';

const VoucherGuide = ({ guide }: IVoucherGuide) => {
  return (
    <div className="mt-[32px]">
      <p className="plus-jakarta-sans font-[700] text-[16px] leading-[24px] text-[#272A2D] mb-[12px]">
        How to get
      </p>

      <div className="flex flex-col gap-[24px]">
        {guide.map((item, index) => (
          <div className="flex items-start gap-[10px]" key={index}>
            <p className="plus-jakarta-sans font-[400] text-[14px] leading-[23.8px] text-[#272A2D]">
              {`${index + 1}.`}
            </p>
            <div className="">
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

export default VoucherGuide;

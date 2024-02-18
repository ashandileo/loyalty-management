import Divider from '../../shared/Divider/Divider';
import { IVoucherDescription } from './Interface';

const VoucherDescription = ({ description }: IVoucherDescription) => {
  return (
    <>
      <p className="plus-jakarta-sans font-[400] text-[14px] leading-[23.8px] text-[#272A2D] text-justify mb-[32px]">
        {description}
      </p>

      <Divider borderStyle="border-dashed" />
    </>
  );
};

export default VoucherDescription;

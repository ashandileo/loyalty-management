import { NavLink } from 'react-router-dom';

import Button from '../components/shared/Button/Button';
import OtpBox from '../components/shared/OtpBox/OtpBox';
import SVGIcon from '../components/shared/SVGIcon/SVGIcon';

const Otp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="flex items-center justify-center mb-[16px]">
        <SVGIcon
          name="company-logo"
          width={24}
          height={24}
          className="mr-[10px]"
        />
        <div className="text-3xl plus-jakarta-sans font-[700]">Loyauté</div>
      </div>

      <div className="w-[408px] py-[32px] px-[24px]">
        <div className="text-center">
          <p className="plus-jakarta-sans font-[700] text-[29px] leading-[31.9px] mb-[8px]">
            Enter OTP Verification
          </p>
          <p className="plus-jakarta-sans font-[400] text-[14px] leading-[23.8px] text-[#9A9A9A] mb-[32px]">
            We’ve sent an OTP code to{' '}
            <span className="text-[#232323]">+62 823403122</span>
          </p>

          <OtpBox />
        </div>

        <p className="plus-jakarta-sans text-[14px] font-[400] leading-[23.8px] text-[#9A9A9A] mt-[16px] mb-[48px] text-center">
          Didn’t receive code ?{' '}
          <NavLink to="/forgot-password" className="font-[600] text-[#007DFC]">
            Resend Code
          </NavLink>
        </p>

        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Otp;

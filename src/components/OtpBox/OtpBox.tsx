import React from 'react';

const OtpBox = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <OtpInput />
      <OtpInput />
      <OtpInput />
      <OtpInput />
    </div>
  );
};

const OtpInput = () => {
  return (
    <input
      className="border border-solid border-[#D9D9D9] w-[70px] h-[56px] rounded-[8px] text-center plus-jakarta-sans font-[500] text-[#232323] text-[20px] leading-[34px]"
      maxLength={1}
    />
  );
};

export default OtpBox;

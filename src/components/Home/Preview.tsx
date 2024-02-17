import React from 'react';

import IconButton from '../shared/IconButton/IconButton';
import SVGIcon from '../shared/SVGIcon/SVGIcon';

const Preview = () => {
  return (
    <div
      className="w-full py-[100px] bg-[#017BF7] relative"
      style={{
        backgroundImage: 'url(/images/preview-overlay.png)'
      }}
    >
      <div className="container mx-[auto]">
        <div className="flex items-center mb-[30px]">
          <SVGIcon
            name="company-logo"
            width={26}
            height={26}
            className="mr-[12px]"
          />
          <p className="plus-jakarta-sans font-[700] text-[30.5px] leading-[33.55px] text-white">
            Loyauté
          </p>
        </div>

        <p className="plus-jakarta-sans font-[700] text-[40px] leading-[50.4px] text-white">
          Get Instant Access: <br />
          Download Now!
        </p>
        <p className="plus-jakarta-sans font-[400] text-[16px] leading-[26px] text-white mt-[16px]">
          Download our <span className="font-[700]">Loyauté</span> now to unlock
          exclusive <br /> promotions and explore exciting features
        </p>

        <div className="flex items-center gap-[24px] mt-[30px]">
          <IconButton
            iconName="icon-playstore"
            customClass="!border-[2px] !border-[#fff]"
          >
            Play Store
          </IconButton>
          <IconButton
            iconName="icon-apps-store"
            customClass="!border-[2px] !border-[#fff]"
          >
            Apps Store
          </IconButton>
        </div>
      </div>

      <img
        src="/images/screen-preview.svg"
        className="w-[auto] h-[auto] absolute top-0 right-[0px]"
        alt="Preview"
      />
    </div>
  );
};

export default Preview;

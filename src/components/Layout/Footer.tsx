import React from 'react';

import SVGIcon from '../shared/SVGIcon/SVGIcon';

const Footer = () => {
  return (
    <div className="bg-[#0A142F] py-[80px]">
      <div className="container mx-[auto]">
        <div className="grid grid-cols-4 items-start">
          <div className="flex items-center">
            <SVGIcon
              name="company-logo"
              width={36}
              height={36}
              className="mr-[16px]"
            />
            <p className="plus-jakarta-sans font-[700] text-[41.57px] leading-[45.73px] text-white">
              Loyauté
            </p>
          </div>

          <div className="flex flex-col gap-[40px]">
            <p className="plus-jakarta-sans font-[700] text-[16px] leading-[24px] text-white">
              Quick Links
            </p>
            <p className="plus-jakarta-sans text-[14px] leading-[21px font-[400] text-white">
              Home
            </p>
            <p className="plus-jakarta-sans text-[14px] leading-[21px font-[400] text-white">
              History
            </p>
            <p className="plus-jakarta-sans text-[14px] leading-[21px font-[400] text-white">
              Inbox
            </p>
            <p className="plus-jakarta-sans text-[14px] leading-[21px font-[400] text-white">
              Profile
            </p>
          </div>

          <div className="flex flex-col gap-[40px]">
            <p className="plus-jakarta-sans font-[700] text-[16px] leading-[24px] text-white">
              Categorías
            </p>
            <p className="plus-jakarta-sans text-[14px] leading-[21px font-[400] text-white">
              Latests Promo
            </p>
            <p className="plus-jakarta-sans text-[14px] leading-[21px font-[400] text-white">
              Popular Merchant
            </p>
            <p className="plus-jakarta-sans text-[14px] leading-[21px font-[400] text-white">
              Popular Rewards
            </p>
          </div>

          <div className="flex flex-col gap-[40px]">
            <p className="plus-jakarta-sans font-[700] text-[16px] leading-[24px] text-white">
              Download Apps
            </p>

            <div className="flex items-center gap-[20px]">
              <div className="p-[10px] bg-white rounded-[6px] flex items-center">
                <img
                  src="/images/goole-play-logo.svg"
                  className="w-[auto] h-[auto]"
                  alt="Google Play Logo"
                />
                <div className="ml-[4px]">
                  <p className="plus-jakarta-sans font-[400] text-[10px] text-[#090909] leading-[6px]">
                    GET IT ON
                  </p>
                  <p className="plus-jakarta-sans font-[600] text-[18px] text-[#090909]">
                    Google Play
                  </p>
                </div>
              </div>

              <div className="p-[10px] bg-white rounded-[6px] flex items-center">
                <img
                  src="/images/apple-logo.svg"
                  className="w-[auto] h-[auto]"
                  alt="Apple Logo"
                />
                <div className="ml-[4px]">
                  <p className="plus-jakarta-sans font-[400] text-[10px] text-[#090909] leading-[6px]">
                    Download on the
                  </p>
                  <p className="plus-jakarta-sans font-[600] text-[18px] text-[#090909]">
                    App Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white mt-[60px]" />

        <div className="flex items-center justify-between mt-[20px]">
          <div className="flex items-center gap-[20px]">
            <SVGIcon name="icon-twitter" width={20} height={20} />
            <SVGIcon name="icon-linkedin" width={20} height={20} />
            <SVGIcon name="icon-facebook" width={20} height={20} />
          </div>
          <div className="flex items-center gap-[40px]">
            <p className="plus-jakarta-sans font-[400] text-[14px] leading-[21px] text-white">
              Política de Privacidad
            </p>
            <p className="plus-jakarta-sans font-[400] text-[14px] leading-[21px] text-white">
              Términos y Condiciones
            </p>
            <p className="plus-jakarta-sans font-[400] text-[14px] leading-[21px] text-white">
              Código de Conducta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

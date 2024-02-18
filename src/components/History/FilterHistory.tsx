import React from 'react';

import Button from '../shared/Button/Button';
import SVGIcon from '../shared/SVGIcon/SVGIcon';

const FilterHistory = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <div className="flex items-center">
        <div className="border border-solid border-[#DCDFE3] py-[12px] px-[16px] rounded-tl-[4px] rounded-bl-[4px] w-[166px] flex items-center justify-between h-[44px]">
          <p className="plus-jakarta-sans font-[400] text-[14px] leading-[20px]">
            All
          </p>
          <SVGIcon name="icon-arrow-down" width={12} height={12} />
        </div>
        <div className="relative">
          <SVGIcon
            name="icon-search"
            width={24}
            height={24}
            className="absolute left-[16px] top-[50%] translate-y-[-50%]"
          />
          <input
            placeholder="Search"
            className="border border-solid border-[#DCDFE3] py-[12px] px-[16px] rounded-tr-[4px] rounded-br-[4px] h-[44px] ml-[-1px] plus-jakarta-sans font-[400] text-[14px] leading-[20px] pl-[48px]"
          />
        </div>
      </div>
      <Button customClass="!h-[44px] !rounded-[4px] !bg-[#F9F9FB] !text-[#272A2D] !text-[14px] !leading-[20px]">
        Search
      </Button>
    </div>
  );
};

export default FilterHistory;

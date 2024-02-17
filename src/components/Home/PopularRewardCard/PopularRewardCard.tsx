import React from 'react';

import SVGIcon from '../../shared/SVGIcon/SVGIcon';
import { IPopularRewardCard } from './Interface';

const PopularRewardCard = ({ item }: IPopularRewardCard) => {
  return (
    <div>
      <img
        src={item.image}
        alt={`${item.merchantName} Reward`}
        className="mb-[20px] w-full"
      />
      <div className="flex items-center mb-[4px]">
        <img
          src={item.merchantLogo}
          className="w-[24px] h-[24px] mr-[10px]"
          alt={item.merchantName}
        />
        <p className="plus-jakarta-sans font-[400] text-[16px] leading-[17.6px] text-[#272A2D]">
          {item.merchantName}
        </p>
      </div>
      <p className="plus-jakarta-sans font-[600] text-[20px] leading-[25.2px] mb-[4px] text-[#272A2D] truncate">
        {item.name}
      </p>
      <p className="plus-jakarta-sans font-[400] text-[16px] text-[#979797] mb-[2px]">
        Point earned
      </p>
      <div className="flex items-center gap-[8px]">
        <div className="rounded-full overflow-hidden">
          <SVGIcon name="icon-earned" width={20} height={20} />
        </div>
        <p className="plus-jakarta-sans font-[500] text-[16px] leading-[20.16px] text-[#272A2D]">
          {item.pointEarned}
        </p>
      </div>
    </div>
  );
};

export default PopularRewardCard;

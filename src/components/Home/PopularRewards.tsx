import { useState } from 'react';

import categories from '../../fixtures/categories';
import popularRewards from '../../fixtures/popular-rewards';
import Badge from '../shared/Badge/Badge';
import PopularRewardCard from './PopularRewardCard/PopularRewardCard';

const PopularRewards = () => {
  const [currentCategory, setCurrentCategory] = useState('all');

  return (
    <div className="mb-[72px] container mx-[auto]">
      <h1 className="plus-jakarta-sans font-[700] text-[32px] leading-[40.32px] text-[#272A2D] mb-[8px]">
        Popular Rewards
      </h1>
      <p className="plus-jakarta-sans font-[400] text-[16px] leading-[20.16px] text-[#959595] mb-[48px]">
        Explore our latest popular rewards!
      </p>

      <div className="flex items-center gap-[16px] mb-[32px]">
        {categories.map((category, index) => (
          <Badge
            key={index}
            id={category.id}
            text={category.name}
            iconSrc={category.icon}
            isActive={currentCategory === category.id}
            onClick={(id) => setCurrentCategory(id)}
          />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-[28px]">
        {popularRewards.map((item, index) => (
          <PopularRewardCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularRewards;

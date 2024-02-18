import React, { useState } from 'react';

import switcherOptions from '../../fixtures/switcher-options';
import Switcher from '../shared/Switcher/Switcher';

const TopContent = () => {
  const [activeTab, setActiveTab] = useState('earned');
  return (
    <div className="container mx-[auto]">
      <h1 className="plus-jakarta-sans font-[700] text-[32px] leading-[35.2px] text-[#272A2D] mb-[16px]">
        Point History
      </h1>
      <p className="plus-jakarta-sans font-[400] text-[18px]l leading-[22.68px] text-[#959595] mb-[24px]">
        View your earned and reedemed point
      </p>

      <div className="mb-[32px]">
        <Switcher
          options={switcherOptions}
          value={activeTab}
          onChange={setActiveTab}
        />
      </div>
    </div>
  );
};

export default TopContent;

import React from 'react';

import FilterHistory from './FilterHistory';

const HistoryTableContent = () => {
  return (
    <div className="container mx-[auto]">
      <div className="bg-white py-[20px] px-[24px] rounded-[12px] border border-solid border-[#EAECF0] shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="plus-jakarta-sans font-[500] text-[18px] leading-[28px] text-[#101828] mb-[4px]">
              Company List Lorem Ipsum
            </p>
            <p className="inter font-[400] text-[14px] leading-[20px] text-[#667085]">
              These companies consecture ipsum
            </p>
          </div>
          <FilterHistory />
        </div>
      </div>
    </div>
  );
};

export default HistoryTableContent;

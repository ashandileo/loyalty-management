import React from 'react';

import SVGIcon from '../shared/SVGIcon/SVGIcon';

const headers = [
  {
    name: 'Merchant',
    withSort: true,
    widthClass: 'flex-grow'
  },
  {
    name: 'Date',
    withSort: false,
    widthClass: 'w-[264px]'
  },
  {
    name: 'Time',
    withSort: false,
    widthClass: 'w-[102px]'
  },
  {
    name: 'Earned Points',
    withSort: false,
    widthClass: 'w-[156px]'
  },
  {
    name: '',
    withSort: false,
    widthClass: 'w-[72px]'
  }
];

const TableHistory = () => {
  return (
    <div className="mx-[-24px]">
      <div className="flex items-center bg-[#F9FAFB]">
        {headers.map((header, index) => (
          <div
            className={`flex py-[12px] px-[24px] ${header.widthClass}`}
            key={index}
          >
            <div className="flex items-center">
              <p className="figtree font-[500] text-[14px] leading-[18px] text-[#667085]">
                {header.name}
              </p>
              {header.withSort && (
                <SVGIcon
                  name="icon-arrow-down-2"
                  width={12}
                  height={12}
                  className="ml-[4px]"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableHistory;

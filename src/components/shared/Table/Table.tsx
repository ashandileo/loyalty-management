import React from 'react';

import SVGIcon from '../SVGIcon/SVGIcon';

const Table = ({ children }: any) => {
  return <div className="w-full">{children}</div>;
};

const RowHeader = ({ children }: any) => {
  return (
    <div className="flex items-center bg-[#F9FAFB] border-0 border-b border-solid border-[#EAECF0]">
      {children}
    </div>
  );
};

const ColumnHeader = ({ widthClass, children, withSort, grow }: any) => {
  return (
    <div
      className={`flex py-[12px] px-[24px] ${widthClass} ${grow ? 'flex-grow' : ''}`}
    >
      <div className="flex items-center">
        <p className="figtree font-[500] text-[14px] leading-[18px] text-[#667085]">
          {children}
        </p>
        {withSort && (
          <SVGIcon
            name="icon-arrow-down-2"
            width={12}
            height={12}
            className="ml-[4px]"
          />
        )}
      </div>
    </div>
  );
};

const Row = ({ children }: any) => {
  return (
    <div className="flex items-center border-0 border-b border-solid border-[#EAECF0]">
      {children}
    </div>
  );
};

const Column = ({ children, grow, widthClass }: any) => {
  return (
    <div
      className={`flex items-center ${widthClass} ${grow ? 'flex-grow' : ''} h-[72px] px-[24px] py-[16px]`}
    >
      {children}
    </div>
  );
};

Table.RowHeader = RowHeader;
Table.ColumnHeader = ColumnHeader;
Table.Row = Row;
Table.Column = Column;

export default Table;

import paginationNumber from '../../fixtures/pagination-history-number';
import SVGIcon from '../shared/SVGIcon/SVGIcon';

const TablePagination = () => {
  return (
    <div className="py-[34px] px-[140px]">
      <div className="flex items-center justify-between">
        <button className="border border-solid border-[#D0D5DD] rounded-[8px] py-[8px] px-[14px] flex items-center">
          <SVGIcon
            name="icon-arrow-down-2"
            width={12}
            height={12}
            className="rotate-[90deg] mr-[8px]"
          />
          <p className="figtree font-[500] text-[14px] leading-[20px] text-[#101828]">
            Prev
          </p>
        </button>
        <div className="flex items-center gap-[4px]">
          {paginationNumber.map((number, index) => (
            <button
              className={`w-[40px] h-[40px] rounded-[8px] p-[12px] hover:bg-[#FFF6F2] flex items-center justify-center figtree font-[500] text-[16px] leading-[20px] hover:text-[#EF7141] ${index === 0 ? 'bg-[#FFF6F2] text-[#EF7141]' : ''}`}
              key={index}
            >
              {number}
            </button>
          ))}
        </div>
        <button className="border border-solid border-[#D0D5DD] rounded-[8px] py-[8px] px-[14px] flex items-center">
          <SVGIcon
            name="icon-arrow-down-2"
            width={12}
            height={12}
            className="rotate-[-90deg] ml-[8px] flex order-1"
          />
          <p className="figtree font-[500] text-[14px] leading-[20px] text-[#101828]">
            Next
          </p>
        </button>
      </div>
    </div>
  );
};

export default TablePagination;

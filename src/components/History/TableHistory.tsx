import companyHistoryList from '../../fixtures/company-history-list';
import historyHeaders from '../../fixtures/history-headers';
import Badge from '../shared/Badge/Badge';
import SVGIcon from '../shared/SVGIcon/SVGIcon';
import Table from '../shared/Table/Table';
import TablePagination from './TablePagination';

const TableHistory = () => {
  return (
    <div className="mx-[-24px]">
      <Table>
        <Table.RowHeader>
          {historyHeaders.map((header, index) => (
            <Table.ColumnHeader
              key={index}
              widthClass={header.widthClass}
              withSort={header.withSort}
              grow={header.grow}
            >
              {header.name}
            </Table.ColumnHeader>
          ))}
        </Table.RowHeader>
        {companyHistoryList.map((company, index) => (
          <Table.Row key={index}>
            <Table.Column grow>
              <div className="flex items-center">
                <img
                  src={company.merchantLogo}
                  className="w-[40px] h-[40px] mr-[12px]"
                  alt="Starbucks"
                />
                <p className="figtree font-[500] text-[14px] leading-[20px]">
                  {company.merchantName}
                </p>
              </div>
            </Table.Column>
            <Table.Column widthClass="w-[264px]">
              <p className="figtree font-[400] text-[14px] leading-[20px]">
                {company.date}
              </p>
            </Table.Column>
            <Table.Column widthClass="w-[102px]">
              <p className="figtree font-[400] text-[14px] leading-[20px]">
                {company.time}
              </p>
            </Table.Column>
            <Table.Column widthClass="w-[156px]">
              <Badge
                text={`+${company.point} Point`}
                id="badge-1"
                variant="success"
                customTextClass="figtree !leading-[20px]"
              />
            </Table.Column>
            <Table.Column widthClass="w-[72px]">
              <SVGIcon
                name="icon-more-vertical"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </Table.Column>
          </Table.Row>
        ))}
      </Table>

      <TablePagination />
    </div>
  );
};

export default TableHistory;

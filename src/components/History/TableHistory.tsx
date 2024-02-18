import Badge from '../shared/Badge/Badge';
import SVGIcon from '../shared/SVGIcon/SVGIcon';
import Table from '../shared/Table/Table';

const headers = [
  {
    name: 'Merchant',
    withSort: true,
    grow: true
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
      <Table>
        <Table.RowHeader>
          {headers.map((header, index) => (
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
        <Table.Row>
          <Table.Column grow>
            <div className="flex items-center">
              <img
                src="/images/starbucks.svg"
                className="w-[40px] h-[40px] mr-[12px]"
                alt="Starbucks"
              />
              <p>Starbucks</p>
            </div>
          </Table.Column>
          <Table.Column widthClass="w-[264px]">
            <p className="figtree font-[400] text-[14px] leading-[20px]">
              25 December 2023
            </p>
          </Table.Column>
          <Table.Column widthClass="w-[102px]">
            <p className="figtree font-[400] text-[14px] leading-[20px]">
              10:24
            </p>
          </Table.Column>
          <Table.Column widthClass="w-[156px]">
            <Badge
              text="+50 Point"
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
      </Table>
    </div>
  );
};

export default TableHistory;

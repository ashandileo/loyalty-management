export interface ITable {
  children: React.ReactNode;
}

export interface IRowHeader {
  children: React.ReactNode;
}

export interface IColumnHeader {
  children: React.ReactNode;
  widthClass?: string;
  withSort?: boolean;
  grow?: boolean;
}

export interface IRow {
  children: React.ReactNode;
}

export interface IColumn {
  children: React.ReactNode;
  widthClass?: string;
  grow?: boolean;
}

interface IOptions {
  label: string;
  value: string;
}

export interface ISwitcher {
  options: IOptions[];
  value: string;
  onChange: (value: string) => void;
}

export interface IOption {
  isActive: boolean;
  option: IOptions;
  onChange: (value: string) => void;
}

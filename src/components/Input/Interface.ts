export interface IInput {
  value?: string;
  placeholder?: string;
  customClass?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
}

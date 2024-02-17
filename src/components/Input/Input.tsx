import './Input.css';
import { IInput } from './Interface';

const Input = ({ value, placeholder, customClass = '', onChange }: IInput) => {
  return (
    <div
      className={`relative w-full input-component ${customClass} ${value ? 'mt-[46px]' : ''}`}
    >
      <input
        className="border border-solid border-[#D9D9D9] outline-none p-[16px] rounded-[8px] w-full"
        value={value}
        onChange={onChange}
      />
      <span
        className={`placeholder absolute left-[16px] plus-jakarta-sans text-[#9A9A9A] top-[50%] translate-y-[-50%] ${value ? 'left-0 top-[-18px]' : ''}`}
      >
        {placeholder}
      </span>
    </div>
  );
};

export default Input;

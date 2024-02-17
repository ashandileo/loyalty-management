import './Input.css';
import { IInput } from './Interface';

const Input = ({ value, placeholder, customClass = '', onChange }: IInput) => {
  return (
    <div
      className={`relative w-full input-component ${customClass} ${value ? 'mt-[50px]' : ''}`}
    >
      <input
        className="border border-solid border-[#D9D9D9] outline-none p-[16px] rounded-[8px] w-full"
        value={value}
        onChange={onChange}
      />
      <span
        className={`placeholder absolute plus-jakarta-sans text-[#9A9A9A] translate-y-[-50%] ${value ? 'left-0 top-[-18px]' : 'left-[16px] top-[50%]'}`}
      >
        {placeholder}
      </span>
    </div>
  );
};

export default Input;

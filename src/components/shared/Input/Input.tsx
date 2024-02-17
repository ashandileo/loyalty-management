import ctl from '@netlify/classnames-template-literals';

import './Input.css';
import { IInput } from './Interface';

const Input = ({
  value,
  placeholder,
  customClass = '',
  onChange,
  type = 'text'
}: IInput) => {
  const inputContainerCN = ctl(`
    relative
    w-full
    input-component
    ${customClass}
    ${value && 'mt-[50px]'}
  `);

  const placeholderCN = ctl(`
    placeholder
    absolute
    plus-jakarta-sans
    text-[#9A9A9A]
    translate-y-[-50%]
    ${value ? 'left-0 top-[-18px]' : 'left-[16px] top-[50%]'}
  `);

  return (
    <div className={inputContainerCN}>
      <input
        className="border border-solid border-[#D9D9D9] outline-none p-[16px] rounded-[8px] w-full"
        value={value}
        onChange={onChange}
        type={type}
      />
      <span className={placeholderCN}>{placeholder}</span>
    </div>
  );
};

export default Input;

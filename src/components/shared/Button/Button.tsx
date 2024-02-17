import ctl from '@netlify/classnames-template-literals';

import { IButton } from './Interface';

const Button = ({ children, disabled }: IButton) => {
  const buttonCN = ctl(`
    w-full
    h-[56px]
    text-white
    plus-jakarta-sans
    font-[500]
    text-[16px]
    leading-[26.4px]
    rounded-[8px]
    ${disabled ? 'bg-[#D9D9D9] cursor-not-allowed' : 'bg-[#007DFC] hover:bg-blue-600'}
  `);

  return <button className={buttonCN}>{children}</button>;
};

export default Button;

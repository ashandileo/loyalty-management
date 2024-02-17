import React, { useState } from 'react';

import ctl from '@netlify/classnames-template-literals';

import { IOption, ISwitcher } from './Interface';

const Switcher = ({ options, value, onChange }: ISwitcher) => {
  return (
    <div className="flex items-center border-0 border-b border-[#aed1f2] w-min">
      {options.map((option, index) => {
        const isActive = option.value === value;
        return (
          <Option
            key={index}
            isActive={isActive}
            option={option}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

const Option = ({ isActive, option, onChange }: IOption) => {
  const [onHover, setOnHover] = useState(false);

  const indicatorCN = ctl(`
  absolute
  w-full
  h-[2px]
  bg-[#0074E0]
  left-[0px]
  bottom-[-0.5px]
  rounded-tl-[2px]
  rounded-tr-[2px]
  ${isActive || onHover ? 'opacity-1' : 'opacity-0'}
`);

  return (
    <div
      className="px-[70px] relative cursor-pointer"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={() => onChange(option.value)}
    >
      <p className="plus-jakarta-sans font-[400] text-[18.67px] leading-[53.33px] text-[#272A2D]">
        {option.label}
      </p>
      <div className={indicatorCN} />
    </div>
  );
};

export default Switcher;

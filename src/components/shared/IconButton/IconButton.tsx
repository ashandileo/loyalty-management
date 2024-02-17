import React from 'react';

import ctl from '@netlify/classnames-template-literals';

import SVGIcon from '../SVGIcon/SVGIcon';
import { IIconButton } from './Interface';

const IconButton = ({ children, iconName }: IIconButton) => {
  const buttonCN = ctl(`
    border
    border-solid
    border-[#BBBBBB]
    text-white
    inter
    font-[500]
    leading-[26.4px]
    py-[12px]
    px-[34px]
    rounded-[100px]
    flex
    items-center
    gap-[10px]
  `);

  return (
    <button className={buttonCN}>
      <SVGIcon name={iconName} width={18} height={18} />
      {children}
    </button>
  );
};

export default IconButton;

import React from 'react';

import { IDivider } from './Interface';

const Divider = ({ colorClass = 'bg-[#E9E9E9]' }: IDivider) => {
  return <div className={`w-full h-[1px] ${colorClass}`} />;
};

export default Divider;

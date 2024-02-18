import React from 'react';

import { IDivider } from './Interface';

const Divider = ({ borderStyle = 'border-solid' }: IDivider) => {
  return (
    <div className={`border-0 border-b border-[#E9E9E9] ${borderStyle}`} />
  );
};

export default Divider;

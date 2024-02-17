import ctl from '@netlify/classnames-template-literals';

import { IBadge } from './Interface';

const Badge = ({ text, iconSrc, isActive, onClick, id }: IBadge) => {
  const badgeCN = ctl(`
    bg-[#F6F7FB]
    w-[auto]
    py-[10px]
    px-[20px]
    rounded-[100px]
    h-[42px]
    hover:bg-[#0074E0]
    group
    cursor-pointer
    flex items-center
    ${isActive && 'bg-[#0074E0]'}
  `);

  const badgeTextCN = ctl(`
    plus-jakarta-sans
    font-[400]
    text-[14px]
    leading-[21.84px]
    text-[#232323]
    group-hover:text-white
    group-hover:font-[600]
    ${isActive && 'text-white font-[600]'}
  `);

  return (
    <div className={badgeCN} onClick={() => onClick && onClick(id)}>
      {iconSrc && <img src={iconSrc} alt={text} className="mr-[8px]" />}
      <p className={badgeTextCN}>{text}</p>
    </div>
  );
};

export default Badge;

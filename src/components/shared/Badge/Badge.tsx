import ctl from '@netlify/classnames-template-literals';

import { IBadge } from './Interface';

const Badge = ({
  text,
  iconSrc,
  isActive,
  onClick,
  id,
  variant = 'basic',
  customTextClass
}: IBadge) => {
  const badgeCN = ctl(`
    w-[auto]
    py-[10px]
    px-[20px]
    rounded-[100px]
    h-[42px]
    group
    cursor-pointer
    flex items-center
    ${variant === 'basic' && !isActive && 'bg-[#F6F7FB] hover:bg-[#0074E0]'}
    ${variant === 'success' && 'bg-[#F0FAF3]'}
    ${isActive && variant === 'basic' && 'bg-[#0074E0]'}
  `);

  const badgeTextCN = ctl(`
    plus-jakarta-sans
    font-[400]
    text-[14px]
    leading-[21.84px]
    whitespace-nowrap
    ${variant === 'basic' && 'text-[#232323] group-hover:text-white group-hover:font-[600]'}
    ${variant === 'success' && 'text-[#39B963]'}
    ${isActive && 'text-white font-[600]'}
    ${customTextClass}
  `);

  return (
    <div className={badgeCN} onClick={() => onClick && onClick(id)}>
      {iconSrc && <img src={iconSrc} alt={text} className="mr-[8px]" />}
      <p className={badgeTextCN}>{text}</p>
    </div>
  );
};

export default Badge;

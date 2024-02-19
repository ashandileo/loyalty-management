import React, { useEffect, useState } from 'react';

const listHeader = [
  'General',
  'Benefit',
  'How to Get',
  'Terms and Condition',
  'Another Promo'
];

const VoucherNavigation = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [active, setActive] = useState('General');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowComponent(scrollPosition > 100);
  }, [scrollPosition]);

  console.log({
    showComponent,
    scrollPosition
  });

  // if (!showComponent) return null;

  return (
    <div
      className={`w-full bg-white pt-[16px] fixed z-[20] ${showComponent ? 'top-[0px]' : 'top-[-500px]'} transition-top duration-500 ease-in-out`}
    >
      <div className="w-[994px] mx-[auto]">
        <div className="flex items-center gap-[16px]">
          {listHeader.map((header) => (
            <div
              className={`py-[10px] px-[20px] border-0 border-b-[3px] hover:border-[#0074E0] ${active === header ? 'border-[#0074E0]' : 'border-transparent'} group cursor-pointer`}
            >
              <p
                className={`plus-jakarta-sans text-[16px] leading-[27.2px] group-hover:text-[#0074E0] group-hover:font-[600] ${active === header ? 'text-[#0074E0] font-[600]' : 'text-[#BCBCBC] font-[400]'}`}
              >
                {header}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoucherNavigation;

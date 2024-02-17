import SVGIcon from '../shared/SVGIcon/SVGIcon';

const Header = () => {
  return (
    <div className="relative top-[0px] z-[10] w-full">
      <div className="container mx-[auto] py-[32px] flex justify-between">
        <div className="flex items-center">
          <SVGIcon
            name="company-logo"
            width={26}
            height={26}
            className="mr-[12px]"
          />
          <p className="text-white font-[700] text-[30.5px] leading-[33.55px]">
            Loyauté
          </p>
        </div>

        <div className="flex items-center">
          <SVGIcon
            name="icon-notification"
            width={28}
            height={28}
            className="mr-[32px]"
          />
          <div className="flex flex-col items-end mr-[14px]">
            <p className="plus-jakarta-sans font-[400] text-[12px] leading-[20.4px] text-white mb-[2px]">
              Good morning,
            </p>
            <p className="plus-jakarta-sans font-[700] text-[20px] leading-[22px] text-white">
              Johan Doe
            </p>
          </div>
          <img
            src="/images/johan-doe-2.png"
            className="rounded-[12px] w-[50px] h-[50px]"
            alt="Johan Doe"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

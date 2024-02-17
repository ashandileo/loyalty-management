import IconButton from '../shared/IconButton/IconButton';
import OverlayBanner from './OverlayBanner';

const Banner = () => {
  return (
    <div
      className="relative w-full h-[80vh] bg-no-repeat bg-cover rounded-bl-[100px] overflow-hidden top-[-114px] flex justify-center"
      style={{
        backgroundImage: 'url(/images/background-2.png)'
      }}
    >
      <div className="relative z-[5] flex flex-col items-center justify-center w-[750px] h-full">
        <h1 className="plus-jakarta-sans text-white font-[700] text-[60px] leading-[75.6px] mb-[36px]">
          Welcome to <span className="text-[#007DFC]">Loyauté</span>
        </h1>
        <p className="plus-jakarta-sans text-white font-[400] text-[24px] leading-[33px] mb-[36px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <div className="flex items-center gap-[24px]">
          <IconButton iconName="icon-playstore">Play Store</IconButton>
          <IconButton iconName="icon-apps-store">Apps Store</IconButton>
        </div>
      </div>
      <OverlayBanner />
    </div>
  );
};

export default Banner;

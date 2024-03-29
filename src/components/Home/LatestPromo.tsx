import Slider from '../shared/Slider/Slider';

const LatestPromo = () => {
  return (
    <div className="mt-[-300px] bg-gray-100 pt-[200px] pb-[100px]">
      <div className="container mx-[auto] mt-[50px]">
        <h1 className="plus-jakarta-sans font-[700] text-[32px] leading-[35.2px] text-[#272A2D] mb-[8px]">
          Latest Promo 🔥
        </h1>
        <p className="plus-jakarta-sans font-[400] text-[16px] leading-[20.16px] text-[#959595]">
          Don't miss out! Limited time offer inside!{' '}
        </p>
      </div>

      <div className="container mx-[auto] mt-[30px]">
        <Slider minWidthClass="min-w-[898px]" minHeightClass="min-w-[440px]" />
      </div>
    </div>
  );
};

export default LatestPromo;

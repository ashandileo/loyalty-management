import Slider from '../shared/Slider/Slider';

const Promo = () => {
  return (
    <div className="w-full mt-[60px]" id="another-promo">
      <div className="w-[994px] mx-[auto]">
        <p className="plus-jakarta-sans font-[700] text-[32px] leading-[35.2px] text-[#272A2D] mb-[8px]">
          Promo you might like
        </p>
        <p className="plus-jakarta-sans font-[400] text-[16px] leading-[20.16px] text-[#959595] mb-[48px]">
          Don't miss out! Limited time offer inside!{' '}
        </p>

        <Slider />
      </div>
    </div>
  );
};

export default Promo;

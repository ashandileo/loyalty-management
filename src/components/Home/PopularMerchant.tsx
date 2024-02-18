import popularMerchants from '../../fixtures/popular-merchants';

const PopularMerchant = () => {
  return (
    <div className="mt-[60px] py-[56px] mb-[72px] container mx-[auto]">
      <div className="flex items-center justify-between mb-[48px]">
        <h1 className="plus-jakarta-sans font-[700] text-[32px] leading-[40.32px] text-[#272A2D]">
          Popular Merchant
        </h1>
        <p className="plus-jakarta-sans font-[500] text-[16px] leading-[20.16px] text-[#007DFC] cursor-pointer">
          View more
        </p>
      </div>

      <div className="flex items-center justify-between">
        {popularMerchants.map((merchant, index) => (
          <div
            className="flex items-center justify-center flex-col"
            key={index}
          >
            <img
              src={merchant.image}
              alt={merchant.name}
              className="w-[120px] h-[auto]"
            />
            <p className="mt-[10px] plus-jakarta-sans font-[400] text-[16px] leading-[17.6px] text-[#272A2D]">
              {merchant.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMerchant;

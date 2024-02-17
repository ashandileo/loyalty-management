import { IButton } from './Interface';

const Button = ({ children }: IButton) => {
  return (
    <button className="w-full h-[56px] bg-[#007DFC] text-white plus-jakarta-sans font-[500] text-[16px] leading-[26.4px] rounded-[8px] hover:bg-blue-600">
      {children}
    </button>
  );
};

export default Button;

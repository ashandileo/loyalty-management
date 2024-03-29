import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../components/shared/Button/Button';
import Input from '../components/shared/Input/Input';
import SVGIcon from '../components/shared/SVGIcon/SVGIcon';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isButtonDisabled = !email || !password;

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="flex items-center justify-center mb-[16px]">
        <SVGIcon
          name="company-logo"
          width={24}
          height={24}
          className="mr-[10px]"
        />
        <div className="text-3xl plus-jakarta-sans font-[700]">Loyauté</div>
      </div>

      <div className="w-[408px] py-[32px] px-[24px]">
        <div className="text-center">
          <p className="plus-jakarta-sans font-[700] text-[29px] leading-[31.9px] mb-[8px]">
            Let’s sign You in.
          </p>
          <p className="plus-jakarta-sans font-[400] text-[14px] leading-[23.8px] text-[#9A9A9A] mb-[32px]">
            Hey there, fabulous! Ready to kick back and explore? Just a quick
            sign-in away from unlocking a world of fun.
          </p>
        </div>

        <Input
          placeholder="Email"
          customClass="mb-[16px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <p className="plus-jakarta-sans text-[14px] font-[400] leading-[23.8px] text-[#9A9A9A] mt-[16px] mb-[48px]">
          Forgot password ?{' '}
          <NavLink to="/forgot-password" className="font-[600] text-[#007DFC]">
            Reset Password
          </NavLink>
        </p>

        <Button disabled={isButtonDisabled}>Sign in</Button>

        <p className="plus-jakarta-sans text-[14px] font-[400] leading-[23.8px] text-[#9A9A9A] mt-[12px] text-center">
          Haven’t registered yet ?{' '}
          <NavLink to="/sign-up" className="font-[600] text-[#007DFC]">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signin;

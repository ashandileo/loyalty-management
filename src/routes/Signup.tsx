import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import SVGIcon from '../components/SVGIcon/SVGIcon';

const Signup = () => {
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
            Create an account
          </p>
          <p className="plus-jakarta-sans font-[400] text-[14px] leading-[23.8px] text-[#9A9A9A] mb-[32px]">
            New around here? Awesome choice! Let's make it official.
          </p>
        </div>

        <Input
          placeholder="Name"
          customClass="mb-[16px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Email"
          customClass="mb-[16px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          customClass="mb-[16px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          customClass="mb-[48px]"
        />

        <Button disabled={isButtonDisabled}>Sign in</Button>

        <p className="plus-jakarta-sans text-[14px] font-[400] leading-[23.8px] text-[#9A9A9A] mt-[12px] text-center">
          Already registered yet ?{' '}
          <NavLink to="/sign-in" className="font-[600] text-[#007DFC]">
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;

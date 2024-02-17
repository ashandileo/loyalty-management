import React from 'react';

import Header from '../components/Header/Header';
import IconButton from '../components/shared/IconButton/IconButton';

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="relative w-full h-[80vh] bg-no-repeat bg-cover rotate-[-8deg] rounded-bl-[100px] overflow-hidden top-[-250px] right-[-40px] flex justify-center"
        style={{
          backgroundImage: 'url(/images/background-2.png)'
        }}
      >
        <div className="relative z-[5] flex flex-col items-center justify-center rotate-[8deg] w-[750px] h-full mt-[55px]">
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
        <Overlay />
      </div>
    </>
  );
};

const Overlay = () => {
  return (
    <div
      className="absolute top-0 bottom-0 w-full bg-red z-1 pointer-events-none"
      style={{
        backgroundColor: 'rgba(6,13,19,0.8)'
      }}
    />
  );
};

export default Home;

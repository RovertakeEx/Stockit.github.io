import React from "react";
import Heroimg from "../assets/heroimage.png";
import { WhatsappButton, AnimatedWhatsAppButton } from '../components/General/WhatsAppButton';

export const Hero = () => {
  return (
    <section id="home" className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-30">
      {/*Left column*/}
      <div className="w-full mid:w-1/2 space-y-8 text-center md:text-start">
        {/* Star Badge*/}
        <div className="w-full flex justify-center md:justify-start mb-1">
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full
           hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-blue-600 hover:text-amber-300 group-hover:scale-110 transition-transform">
            ★
          </span>
          <span className="text-sm font-medium">Just start your growth</span>
        </div>
        </div>

        {/**/}
        <h2 className="text-3xl lg:text-[35px] xl:text-[40px] font-bold leading-tight">
          Run Inventory Smarter
          <span className="text-blue-600 relative inline-block">
            Built for Business Impact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>{" "}
           <span className="whitespace-nowrap">with Stockit</span>
          <span className="inline-block ml-2 animate-pulse text-xxl">📦</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-lg max-w-xl">
          Whether you're just starting out or scaling rapidly, 
          Stockit helps you manage inventory with confidence — fast, secure, and easy.
        </p>

        {/*email bar */}
        <div className="flex items-center justify-center md:justify-start w-full">
          {/* <WhatsappButton/> */}
          <WhatsappButton/>
        </div>
      </div>

      {/*Right column*/}
      <div className="w-3/4 mid:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img
            src={Heroimg}
            alt="Hero image"
            className="rounded-lg relative z-10 
        hover:scale-[1.02] transition-transform duration-360"
          ></img>
        </div>
      </div>
    </section>
  );
};
export default Hero;

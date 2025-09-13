import React, { useEffect, useState } from "react";
import Form from "./Form";
import patternLines from "../assets/images/pattern-lines.svg";
import mobileIMG from "../assets/images/background-mobile.png";
import tabletIMG from "../assets/images/background-tablet.png";
import desktopIMG from "../assets/images/background-desktop.png";
import topPattern from '../assets/images/pattern-squiggly-line-top.svg'
import bottomPatternDesktop from '../assets/images/pattern-squiggly-line-bottom-desktop.svg'
import bottomPatternMobile from '../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
import fullLogo from '../assets/images/logo-full.svg'

const Home = () => {
  const [backgrondImg, setBackgroundImg] = useState(() => {
    const width = window.innerWidth;
    if (width < 768) return mobileIMG;
    if (width < 1024) return tabletIMG;
    return desktopIMG;
  });
 
  useEffect(() => {
    const handleIMG = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBackgroundImg(mobileIMG);
      } else if (width < 1024) {
        setBackgroundImg(tabletIMG);
      } else {
        setBackgroundImg(desktopIMG);
      }
    };
    window.addEventListener("resize", handleIMG);
    return () => {
      window.removeEventListener("resize", handleIMG);
    };
  }, []);
  return (
    <section
      className="bg-[#0c082bff] font-sans h-screen relative z-0 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgrondImg})` }}
    >
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={patternLines}
        alt=""
      />
      <img className="absolute top-0 right-0 " src={topPattern} alt="" />
      <picture>
         <source media="(min-width: 1024px)" srcSet={bottomPatternDesktop} />
         <img className="absolute bottom-0 left-0 z-0" src={bottomPatternMobile} alt="" />
      </picture>
      
      <div className="relative z-50 flex flex-col justify-center items-center h-full">
        <div>
          <img src={fullLogo} alt="" />
        </div>
        <h1 className="font-semibold text-4xl">Your Journey To Code Conf 2025 Start Here!</h1>
        <p className="text-[#8784a4ff]">secure your spot at next year coding conference.</p>
        <Form />
      </div>
    </section>
  );
};

export default Home;

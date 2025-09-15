import React from "react";
import Form from "./Form";
import fullLogo from '../assets/images/logo-full.svg'

const Home = () => {

  return (
 
      
      <section className="relative z-50 flex flex-col justify-center items-center gap-3 h-full">
        <div>
          <img src={fullLogo} alt="" />
        </div>
        <h1 className="font-semibold text-4xl">Your Journey To Code Conf 2025 Start Here!</h1>
        <p className="text-[#8784a4ff]">secure your spot at next year coding conference.</p>
        <Form />
      </section>
 
  );
};

export default Home;

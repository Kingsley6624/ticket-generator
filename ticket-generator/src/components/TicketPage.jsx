import React from "react";
import { useLocation } from "react-router-dom";
import fullLogo from "../assets/images/logo-full.svg";
import ticketPattern from "../assets/images/pattern-ticket.svg";
import logo from "../assets/images/logo-mark.svg";
import github from "../assets/images/icon-github.svg";

const TicketPage = () => {
  const location = useLocation();
  const { value } = location.state || {};
  return (
    <div className="flex flex-col items-center gap-10 w-full  mx-auto px-[5%]">
      <div>
        <img src={fullLogo} alt="" />
      </div>
      <div className="text-center flex flex-col gap-5">
        <h1 className="font-semibold text-4xl">
          Congrats,
          <span className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] text-transparent bg-clip-text">
            {value?.fullname}
          </span>{" "}
          Your ticket is ready.
        </h1>
        <p className="px-5">
          We've emailed your ticket to {value?.email} and will send updates in
          the run up to the event.
        </p>
      </div>

      <div className="relative w-fit">
        <img src={ticketPattern} alt="" />
        <div className="absolute inset-0 p-4 sm:p-6">
          <div className=" flex justify-end h-full">
            <div className="flex flex-col justify-between w-full">
              <div className="flex gap-3">
                <img className="self-start" src={logo} alt="" />
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-xl sm:text-4xl">
                    Coding Conf
                  </span>
                  <p>Jan 31, 2025 / Austin, TX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"
                  src={URL.createObjectURL(value?.image)}
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl">{value?.fullname}</h3>
                  <div className="flex">
                    <img src={github} alt="" />
                    <span>{value?.github}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center flex justify-end rotate-90">
              <span className="font-medium text-2xl text-[#8784a4ff]">
                #01609
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;

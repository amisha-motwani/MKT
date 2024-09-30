import React from "react";
import WorkersWorking from "../Images/WorkersWorking.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function ContactUs() {
  return (
    <>
       <div className="w-[94%] mx-auto">
        <h1 className="text-3xl mt-2 text-[#e8653f] text-center my-3"><b>Contact Us</b></h1>
        <p className="">Whenever you need us, we're here to assist you.</p>
        <img src={WorkersWorking} alt=""className="w-[100%] mx-auto mt-5" />
        <h2 className="my-4 text-2xl">Here’s Where You Can Find Us</h2>
       <div className="w-full flex flex-wrap justify-between mb-5">
        <div className="w-[350px] py-3 shadow-lg p-4">
          <div className="rounded-full border-1 border-[#c8295f] w-[100px] h-[100px] mx-auto flex justify-center items-center my-3">
          <FaLocationDot  className="text-4xl text-[#e8653f]"/>
          </div>
          <h1 c className="text-center"><b>Factory Adress</b></h1>
        <p className="text-center my-2">Plot no. 35 Vijay nagar road, near kalamna market, Laxmi nagar kalamna , Nagpur (MH) 440035</p>
        </div>
        <div className="w-[350px] py-3 shadow-lg p-4">
          <div className="rounded-full border-1 border-[#c8295f] w-[100px] h-[100px] mx-auto flex justify-center items-center my-3">
          <IoCallSharp   className="text-4xl text-[#e8653f]"/>
          </div>
          <h1 c className="text-center"><b>Contact</b></h1>
        <p className="text-center my-2">+917771999441, +919653291543</p>
        <p className="text-center my-2">Monday-Saturday</p>

        <p className="text-center my-2">10:00AM-07:00PM</p>

        </div>
        <div className="w-[350px] py-3 shadow-lg p-4">
          <div className="rounded-full border-1 border-[#c8295f] w-[100px] h-[100px] mx-auto flex justify-center items-center my-3">
          <MdEmail  className="text-4xl text-[#e8653f]"/>
          </div>
          <h1 c className="text-center"><b>Email Adress</b></h1>
        <p className="text-center my-2">er.amishamotwani@gmail.com</p>
        <p className="text-center my-2">amishamotwani143@gmail.com</p>

        </div>
       </div>
      </div>
    </>
  );
}

export default ContactUs;

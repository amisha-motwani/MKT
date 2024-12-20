import React from "react";
// import WorkersWorking from "../Images/WorkersWorking.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ContactUs() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click me
    </Tooltip>
  );

  return (
    <>
      <div className="w-[94%] mx-auto">
        <h1 className="text-2xl text-[#e8653f] text-center mb-3 mt-4">
          <b>Contact Us</b>
        </h1>
        <p className="text-lg">
          Whenever you need us, we're here to assist you.
        </p>
        {/* <img src={WorkersWorking} alt=""className="w-[100%] mx-auto md:mt-4 mt-3" /> */}
        <h2 className="my-4 text-xl">
          <b>Here’s Where You Can Find Us</b>
        </h2>

        <div className="w-full flex flex-wrap justify-between mb-4 ">
          <div className="w-[350px] py-3 shadow-lg p-4 my-2 mx-auto">
            <OverlayTrigger
              // placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button className="rounded-full border-1 border-[#c8295f] w-[100px] h-[100px] mx-auto hover:bg-[#fffff2] flex justify-center items-center my-3">
              <a
                href="https://maps.app.goo.gl/PA2MMfotRWE5LUkR6?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-1 border-[#c8295f] w-[100px] h-[100px] mx-auto flex justify-center items-center my-3"
              >
                <FaLocationDot className="text-4xl text-[#e8653f]" />
              </a>
              </Button>
            </OverlayTrigger>

           
            <h1 c className="text-center">
              <b>Factory Adress</b>
            </h1>
            <p className="text-center my-2">
              Plot no. 35 Vijay nagar road, near kalamna market, Laxmi nagar
              kalamna , Nagpur (MH) 440035
            </p>
          </div>
          <div className="w-[350px] py-3 shadow-lg p-4 my-2 mx-auto">
            <div className="rounded-full border-1 border-[#c8295f] w-[100px] h-[100px] mx-auto flex justify-center items-center my-3">
              <IoCallSharp className="text-4xl text-[#e8653f]" />
            </div>
            <h1 c className="text-center">
              <b>Contact</b>
            </h1>
            <p className="text-center my-2">+917774076564, +918459527142</p>
            <p className="text-center my-2">Monday-Saturday</p>

            <p className="text-center my-2">10:00AM-07:00PM</p>
          </div>
          <div className="w-[350px] py-3 shadow-lg p-4 my-2 mx-auto">
            <div className="rounded-full border-1 border-[#c8295f] w-[100px] h-[100px] mx-auto flex justify-center items-center my-3">
              <MdEmail className="text-4xl text-[#e8653f]" />
            </div>
            <h1 c className="text-center">
              <b>Email Adress</b>
            </h1>
            <p className="text-center my-2">mktextilesnagpur@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

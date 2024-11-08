import React from "react";
import Reliable from "../Images/Reliable.png";
import Teamwork from "../Images/Teamwork.png";
import { MdOutlineThumbUp } from "react-icons/md";
import Innovation from "../Images/Innovation.png";
import ResultsOriented from "../Images/ResultsOriented.png";
import Adaptability from "../Images/Adaptability.png";
import Recognizing from "../Images/Recognizing.png";
import BusinessDeal from "../Images/BusinessDeal.jpg";

function Careers() {
  return (
    <>
      <div className="w-[94%] mx-auto">
        <h1 className="text-2xl mt-2 text-[#e8653f] text-center">
          <b>Careers at MK Textiles</b>
        </h1>
        <p className="my-3">
          <span className="block">
            We at MK Textiles think that our people are what really make us
            strong. Each member of the team is crucial to advancing innovation,
            defining our future, and preserving the principles we hold dear. We
            are constantly searching for driven, imaginative people who are
            prepared to leave their mark.
          </span>
          <span className="block mt-3 text-justify">
            Our workplace allows you to be the best version of yourself every
            single day. Our culture at MK Textiles is one of cooperation and
            support, which promotes development. We value new ideas and fresh
            talent, regardless of experience level, as they may contribute to
            our growth and uphold our tradition of quality.
          </span>
          <span className="block mt-3 text-justify">
            With opportunities in design, manufacturing, research and
            development, marketing, sales, and more, our workforce is vibrant
            and diverse. You will collaborate with professionals that are
            dedicated about producing high-quality textiles that have an impact,
            regardless of your position.
          </span>
          <span className="block mt-3 text-justify">
            We provide so much more than simply employment at MK Textiles. We
            expose you to the textile business, offering you the opportunity to
            advance in a dynamic and cutting-edge field. Working on fascinating
            projects with us will provide you the chance to push limits, hone
            your abilities, and make significant contributions. We support good
            work-life balance in addition to professional development. We
            provide competitive pay, flexible work schedules, and an environment
            that values happiness and contentment for our staff members.
          </span>
          <span className="block mt-3 text-justify">
            Check out the opportunities at MK Textiles right now if you're
            prepared to work for a firm that will value your ideas and help your
            career grow. We'll create a future fueled by innovation and
            greatness together.
          </span>
        </p>
        <h1 className="text-xl my-4 text-[#e8653f] ">
          <b className="mb-">Why Join MK Textiles?</b>
        </h1>
        <ul className="space-y-2 text-base text-gray-700">
          <li className="flex items-center pl-4 my-1">
            <span className="bg-[#c72a5f] w-2 h-2 rounded-full mr-2"></span>
            <span className="ms-2">
              <strong>Equal Opportunities:</strong> We advocate for a work
              environment in which each person has the opportunity to develop,
              prosper, and realize their full potential.
            </span>
          </li>
          <li className="flex items-center pl-4 my-1">
            <span className="bg-[#c72a5f] w-2 h-2 rounded-full mr-2"></span>
            <span className="ms-2">
              <strong>Collaborative Environment:</strong> We make sure that
              every voice is heard by promoting open communication and teamwork.
            </span>
          </li>
          <li className="flex items-center pl-4 my-1">
            <span className="bg-[#c72a5f] w-2 h-2 rounded-full mr-2"></span>
            <span className="ms-2">
              <strong>Professional Development:</strong> We think it's important
              to invest in our staff members by providing them with learning,
              growth, and leadership opportunities.
            </span>
          </li>
          <li className="flex items-center pl-4 my-1">
            <span className="bg-[#c72a5f] w-2 h-2 rounded-full mr-2"></span>
            <span className="ms-2">
              <strong>Innovation & Sustainability:</strong> Join a progressive
              organization dedicated to developing long-term, sustainable
              solutions.
            </span>
          </li>
          <li className="flex items-center pl-4 my-1">
            {/* <span className="bg-[#c72a5f] w-2 h-2 rounded-full mr-2"></span> */}
            <span>
              Working with us will afford you important exposure to the apparel
              and textile industries, enabling you to get in-depth knowledge of
              the newest styles, innovations in technology, and business
              strategies.
            </span>
          </li>
        </ul>
        <div className="bg-[#eef1f1] pt-3 pb-4 my-5 rounded-lg">
          <h1 className="text-center mt-3 mb-1 text-xl">
            <b>OUR WORK VALUES</b>
          </h1>
          <div className="flex flex-wrap justify-evenly gap-1">
           <div className="w-[150px] h-[140px] shadow-lg p-3 bg-[white] rounded-lg my-3">
            {/* <img src={ResultsOriented} alt="" className="mx-auto" /> */}
            <MdOutlineThumbUp className="mx-auto text-[#ba0101] text-[55px] my-2" />
              <h1 className="text-center">
                <b>Quality</b>
              </h1>
            </div>
            <div className="w-[150px] h-[140px] shadow-lg p-4 bg-[white] rounded-lg my-3">
              <img src={Reliable} alt="" className="mx-auto" />
              <h1 className="text-center my-2">
                <b>Reliable</b>
              </h1>
            </div>
            <div className="w-[150px] h-[140px] shadow-lg p-4 bg-[white] rounded-lg my-3">
              <img src={Innovation} alt="" className="mx-auto" />
              <h1 className="text-center">
                <b>Innovation</b>
              </h1>
            </div>
            {/* <div className="w-[150px] h-[140px] shadow-lg p-3 bg-[white] rounded-lg my-3">
              <img src={ResultsOriented} alt="" className="mx-auto" />
              <h1 className="text-center">
                <b>Results-oriented environment</b>
              </h1>
            </div> */}
            {/* <div className="w-[150px] h-[140px] shadow-lg p-3 bg-[white] rounded-lg my-3">
              <img src={ResultsOriented} alt="" className="mx-auto" />
              <h1 className="text-center">
                <b>Results-oriented environment</b>
              </h1>
            </div> */}
            <div className="w-[150px] h-[140px] shadow-lg p-4 bg-[white] rounded-lg my-3">
              <img src={Teamwork} alt="" className="mx-auto" />
              <h1 className="text-center">
                <b>Teamwork</b>
              </h1>
            </div>
            <div className="w-[150px] h-[140px] shadow-lg p-4 bg-[white] rounded-lg my-3">
              <img src={Adaptability} alt="" className="mx-auto" />
              <h1 className="text-center">
                <b>Adaptability</b>
              </h1>
            </div>
            {/* <div className="w-[150px] h-[140px] shadow-lg p-3 bg-[white] rounded-lg my-3">
              <img src={Recognizing} alt="" className="mx-auto" />
              <h1 className="text-center">
                <b>Recognizing and nurturing talent</b>
              </h1>
            </div> */}
          </div>
        </div>
        <div className="w-full md:flex block mt-5 mb-5">
          <div className="md:w-[50%] w-[100%] mx-auto">
            
            <h1 className="text-2xl mt-4 text-[#e8653f]">
              <b>Join Us on Our Journey</b>
            </h1>
            <p className="my-2">
              <span className="block my-2">
                As we continue to grow, we invite you to be a part of our
                journey. Whether you are a customer, a partner, or a future team
                member, we welcome you to explore the world of MK Textiles.
                
              </span>
              <span className="block my-2">Together, let’s create textiles that not only enhance our lives
                but also contribute to a sustainable future. Thank you for
                choosing MK Textiles—where innovation and tradition weave
                together beautifully.</span>
              We urge you to take the first step toward an amazing future if you
              would like to pursue a career with us. Your résumé should be sent
              to <span></span>
              <span className="text-[#c72a5f]">mktextilesnagpur@gmail.com</span>.
              <span className="block my-2">
                We are excited about the prospect of having you join our team!
              </span>
            </p>
          </div>
          <div className="md:w-[50%] w-[100%] mx-auto">
            <img src={BusinessDeal} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;

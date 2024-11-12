import React from "react";
import WomenEmployment from "../Images/WomenEmployment.jpg";

function BeyondBusiness() {
  return (
    <>
      <div className="w-[95%] mx-auto mt-3">
        <h1 className="text-xl my-4 text-center text-[#e8653f]"><b>Women Empowerment in Our Factory</b></h1>
        <p className="text-justify">
          <span className="block">
            Women are empowered at every level in the work environment that we
            at MK Textiles take delight in creating. We are devoted to making
            sure that women have equal opportunity to succeed and advance within
            our company because we firmly think that they are essential to its
            success. In addition to being essential members of our leadership
            teams, women actively participate in our factory's production
            process.
          </span>
          <br />
          <span className=" block">
            We empower women to advance their careers and assume leadership
            positions in the apparel manufacturing industry by offering them
            mentorship, resources, and training. Women are welcome to contribute
            to innovation, discuss ideas, and grow both personally and
            professionally in our factory. We make certain that their opinions
            are acknowledged and heard, which contributes to the development of
            a friendly work environment.
          </span>

          <br />
          <span className="">
            Since many of our female employees balance work and home
            commitments, we also recognize the value of work-life balance and
            make an effort to provide flexibility to meet their demands. Not
            only do we make clothing at MK Textiles, but we also foster an
            empowered atmosphere where women can achieve success and serve as
            role models for others.
          </span>
          <span className=" block">
          <ul className="mt-4">
            
            <li className="my-1">
              <strong>Equal Opportunities:</strong> We strive to provide equal
              opportunities for women in hiring, promotions, and professional
              development. Our recruitment processes are designed to eliminate
              bias and ensure a fair evaluation of all candidates.
            </li>
            <li className="my-1">
              <strong>Supportive Environment:</strong> We aim to create a
              supportive workplace culture where women feel valued, respected,
              and empowered to share their ideas and perspectives. We
              encourage open dialogue and provide resources to address any
              challenges they may face.
            </li>
            <li className="my-1">
              <strong>Leadership Development:</strong> We are dedicated to
              nurturing female talent and promoting women into leadership
              roles. Our mentorship programs and training initiatives are
              designed to equip women with the skills and confidence needed to
              excel.
            </li>
            <li className="my-1">
              <strong>Community Engagement:</strong> We actively participate
              in initiatives that promote women's empowerment beyond our
              organization and committed to collaborate with local and global
              organizations to advance gender equality. We believe that when
              women thrive, everyone benefits.
            </li>
          </ul>
          </span>
        </p>
      </div>
      <div className="w-full my-3">
        <img src={WomenEmployment} className="w-full" />
      </div>
    </>
  );
}

export default BeyondBusiness;

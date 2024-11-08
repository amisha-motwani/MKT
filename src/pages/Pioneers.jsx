import React from "react";
import AkashChawla from "../Images/AkashChawla.png";
import SoniyaChawla from "../Images/SoniyaChawla.png";

function Pioneers() {
  return (
    <>
      <div className="w-[94%] mx-auto">
        <h1 className="my-4 text-xl text-[#e8653f] text-center">
          <b className="mb-">PIONEERS</b>
        </h1>
        <p className="text-justify">
          At MK Textiles, we take great satisfaction in being forerunners in the
          fashion business, continuously establishing trends and raising the
          standard for excellence and originality. Since the beginning, our goal
          has been to push the limits of workmanship and design, making sure
          that Each collection we design is notable for its creativity and
          originality. Our design concept centers on combining classic elegance
          combined with contemporary design. To stay on top of things, we always
          investigating new trends and incorporating them into our gatherings.
          Our commitment to attempting novel patterns, textiles and color
          schemes have placed us at the forefront of introducing new viewpoints
          on modern fashion. Additionally, we're dedicated to sustainability as
          well as diversity. Being trailblazers, we adopt eco-friendly
          procedures and ethical sourcing, guaranteeing that our apparel
        </p>
      </div>
      <div className="md:flex block justify-between md:w-[94%] w-[85%] mx-auto">
        <div className="md:w-[45%] w-[100%] rounded-lg border-1 shadow-2xl mx-auto bg-[#f7f7f7] h-[fit-content] mt-5 mb-3 text-black py-4">
          <div className="w-full mx-auto mb-3 flex justify-center items-center">
            <img
              src={SoniyaChawla}
              alt=""
              className="w-[210px] h-[320px] mx-auto"
            />
          </div>
          <h1 className="text-center">
            <b>Soniya C Motwani </b>
          </h1>
          <p className="text-justify px-5">
            Dr. Soniya C. Motwani is an entrepreneur and the founder and driving
            force behind MK Textiles, bringing a multidisciplinary skill set to
            the company. She holds an MBA from ASCI, Hyderabad, an MA in
            Psychology from IGNOU, and a BHMS from Gondia Medical College. Her
            diverse educational background and passion for innovation inspire MK
            Textiles to deliver exceptional quality in every product.
          </p>
        </div>
        <div className="md:w-[45%] w-[100%] border-1 rounded-lg shadow-2xl mx-auto bg-[#f7f7f7] h-[fit-content] mt-5 mb-3 text-black py-4">
          <div className="w-full mx-auto mb-3 flex justify-center items-center">
            <img
              src={AkashChawla}
              alt=""
              className="w-[210px] h-[300px] mx-auto"
            />
          </div>
          <h1 className="text-center">
            <b>Akash K Chawla</b>
          </h1>
          <p className="text-justify px-5 mt-4">
            Akash K. Chawla is an entrepreneur and the mentor of MK Textiles,
            specializing in customized garment manufacturing. He earned his MBA
            in Sales and Marketing from G. H. Raisoni College in Nagpur and has
            over eight years of valuable experience in the garment industry. His
            expertise and strategic vision in our company will guide as a leader
            in the industry.
          </p>
        </div>
      </div>
      <div className=" w-[94%] border-1 shadow-2xl mx-auto bg-white h-[fit-content] mt-5 mb-3 text-black py-4">
        <h1 className="my-4 text-xl text-[#e8653f] text-center">
          <b className="mb-">PIONEERS VIEW POINT</b>
        </h1>
        <p className="text-justify px-3">
          <span className="block mb-2">
            Our goal is to create a seamless and enjoyable customization
            experience typically revolves around creating unique, high-quality
            clothing tailored to individual customer needs. We are committed to
            sustainability and ethical practices, ensuring that every piece is
            crafted with care and attention to detail.
          </span>
          <span className="block my-2">
            At MK Textiles, we believe that diversity and inclusion are
            essential for fostering innovation, creativity, and success. We are
            committed to empowering women thought promoting women employment in
            the workplace and promoting gender equality across all levels of our
            organization.
          </span>
          <span className="block mb-2 mt-4">
            <h2 className="md:text-xl text-lg text-[#c72a5f]">
              <b>Our Commitment:</b>
            </h2>
            <ul>
              <li className="my-1">
                <strong>Quality Excellence:</strong> We ensure that every product
                is crafted with the finest materials, including high-quality
                threads and meticulous finishing. Our commitment to quality
                guarantees durability and a polished appearance for each piece.
              </li>
              <li className="my-1">
                <strong>Adaptive to Trends:</strong> We stay ahead of the curve by closely monitoring fashion trends and consumer preferences. Our design team continually refreshes our collections, ensuring that our offerings are modern, relevant, and tailored to the needs of our clients.
              </li>
              <li className="my-1">
                <strong>Equal Opportunities:</strong> We are committed to
                providing positive change in society by offering equal
                employment opportunities to women and empowering them, as it is
                fundamental to our belief in looking{" "}
                <span
                  className="text-[#e8653f] cursor-pointer"
                  onClick={() => (window.location.href = "/BeyondBusiness")}
                >
                  <b>Beyond business</b>
                </span>
                .
              </li>
              <li className="my-1">
                <strong>Customer-Centric Approach:</strong> We prioritize our client's feedback and preferences, adapting our production processes to meet their unique needs and deliver personalized experiences.
              </li>
            </ul>
            <p className="my-2">
              As we continue to grow, we remain committed to making a positive
              impact on our employees, our communities, and the world. Together,
              we can create a future where women are empowered to reach their
              fullest potential.
            </p>
            <p className="my-1">
              <b>
                Soniya C Motwani
                <br />
                (Founder MK Textiles)
              </b>
            </p>
          </span>
        </p>
      </div>
    </>
  );
}

export default Pioneers;

import React from "react";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { FaHandPointRight } from "react-icons/fa";
import AboutUsImg from "../Images/AboutUsImg.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import Fabric from "../Images/Fabric.png";
import HappyCustomer from "../Images/HappyCustomer.png";
import Latest from "../Images/Latest.png";
import StitchingMachine from "../Images/StitchingMachine.png";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // marginLeft:"200px",
        // background: "#c7295f",
        background: "#e8653f",
        boxShadow: " 0 8px 16px rgba(0, 0, 0, 0.3)",
        // color: "black",
        // border: "1px solid black",
        paddingLeft: "200px",
        // marginTop:"300px",
        // opacity:"50%"
      }}
      contentArrowStyle={{ borderRight: "7px solid #e8653f" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          className="flex justify-center items-center w-full h-full bg-[#232323] rounded-full border-none "
          style={{ marginRight: "-100px" }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[fit-content] p-2 h-[fit-content] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold px-2 pt-2">
          {experience.title}
        </h3>
        <p
          className="text-white text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {/* {experience.company_name} */}
        </p>
      </div>

      <ul className=" space-y-2 px-2 pt-2 text-justify pb-2 text-white list-none">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            -{point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function AboutUs() {
  const experiences = [
    {
      title: "We use best fabric:",
      icon: Fabric,
      iconBg: "#383E56",
      date: "Sept 2024 - March 2024",
      points: [
        "At MK Textiles, quality clothing begins with the finest fabric selection, we utilize the high-quality fabric that enhance overall product quality.",
        "Best fabric selection to ensure exceptional comfort and aesthetic appeal.",
        "Our durable best quality fabrics ensure longevity, maintaining beauty through countless washes.",
        "We create customized clothing using best fabric to meet your unique style and needs.",
        // "Enjoy every moment in style and confidence with our commitment to quality.",
      ],
    },

    // {
    //   title: "Best Cloth Material:",
    //   // company_name: "Mindcrew Technologies",
    //   // icon: Mindcrewlogo,
    //   icon: "Icon",

    //   iconBg: "#383E56",
    //   date: "Sept 2024 - March 2024",
    //   points: [
    //     "At MK Textiles, we believe that quality clothing begins with the fabric",
    //     "We carefully select only the finest materials for our garments",
    //     "Each piece is designed to not only look beautiful but also to provide exceptional comfort",
    //     "Our fabrics are chosen for their durability, ensuring longevity in wear",
    //     "We evaluate our materials based on feel, breathability, and longevity",
    //     "Our commitment guarantees that garments maintain their beauty and integrity through countless washes",
    //     "Our dedication to quality fabric allows you to enjoy every moment in style and confidence",
    //   ],
    // },
    {
      title: "We Focus on quality finishing and stitching",
      icon: StitchingMachine,
      iconBg: "#383E56",
      date: "Jan 2023 - April 2023",
      points: [
        "We are commited to excellence reflected in our careful finishing and stitching.",
        "We are focussed on producing timeless pieces that withstand changing fashion trends while maintaining quality.",
        "Our every product undergoes thorough inspection by skilled artisans.",
        "We ensure that each product has a polished appearance for any occasion.",
      ],
    },

    // {
    //   title: "Focus on Finishing and Stitching",
    //   // company_name: "Tech Forest",
    //   // icon: TechForest,
    //   icon: "Icon",
    //   iconBg: "#383E56",
    //   date: "Jan 2023 - April 2023",
    //   points: [
    //     "Commitment to excellence is reflected in our focus on finishing stitching",
    //     "Every garment undergoes a meticulous inspection process",
    //     "Skilled artisans pay close attention to detail, enhancing the overall quality",
    //     "Ensures each item has a polished and sophisticated appearance",
    //     "Guarantees confidence, whether dressing for everyday wear or special occasions",
    //     "Feedback loops from customers to address and improve any quality concerns",
    //     "Focus on producing timeless pieces that withstand changing fashion trends while maintaining quality.",
    //     "Adoption of innovative tools and technologies to improve stitching precision and efficiency",
    //     "Utilization of high-quality threads and materials that complement the garment’s fabric",
    //   ],
    // },
    // {
    //   title: "Adaptive/Updated to Modern Patterns:",
    //   // company_name: "Tech Forest",
    //   // icon: TechForest,
    //   icon: "Icon",
    //   iconBg: "#383E56",
    //   date: "Oct 2022 - Dec 2022",
    //   points: [
    //     "Utilization of high-quality fabrics that complement modern designs.",
    //     "Collaboration with trend forecasters to anticipate future styles.",
    //     "Regularly refreshing collections to ensure relevance and variety.",
    //     "Focus on sustainable practices while implementing new designs.",
    //     "Design team researches and embraces current fashion trends.",
    //     "Allows you to express individuality and stay ahead in style.",
    //     "Availability of customizable options for a personalized touch.",
    //     "Creating versatile pieces that transition seamlessly from day to night.",
    //   ],
    // },

    {
      title: "We are Adaptive/Updated to Modern Patterns:",
      icon: Latest,
      iconBg: "#232323",
      date: "Oct 2022 - Dec 2022",
      points: [
        "Design team researches and embraces current fashion trends.",
        "Regularly refreshing collections to ensure relevance and variety.",
        "Focus on sustainable practices while implementing new designs.",
        "Manufacturing products for every size, promoting inclusivity.",
        "Availability of customizable options for a personalized touch.",
      ],
    },

    // {
    //   title: "All Colors Available",
    //   // company_name: "Robotronix",
    //   // icon: Robotronixicon,
    //   icon: "Icon",
    //   iconBg: "#383E56",
    //   date: "April 2019 - May 2019",
    //   points: [
    //     "Extensive color palette offering a wide range of shades for every collection.",
    //     "Commitment to diversity and choice, ensuring options for all personal styles.",
    //     "Bold, vibrant hues available for those who want to make a statement.",
    //     "Empowers self-expression through the perfect color selection that resonates with you.",
    //     "Ensures individuality, allowing your wardrobe to reflect your unique style.",
    //     "Colors for every occasion, whether you’re looking for casual, formal, or seasonal options",
    //     "High-quality dyes and materials ensuring long-lasting and vibrant colors.",
    //     "Regular updates with trending colors, keeping the collection fresh and in line with current fashion.",
    //   ],
    // },
    // {
    //   title: "Inclusive Sizing",
    //   // company_name: "Robotronix",
    //   // icon: Robotronixicon,
    //   icon: "Icon",
    //   iconBg: "#383E56",
    //   date: "April 2019 - May 2019",
    //   points: [
    //     "Inclusive sizing designed to cater to all body types.",
    //     "Broad range of sizes available to ensure a comfortable and stylish fit for everyone.",
    //     "Empowers individuals to embrace their unique shapes and feel confident.",
    //     "Promotes body positivity by offering clothing that complements various body types.",
    //     "Focus on self-confidence, helping everyone feel beautiful and comfortable.",
    //     "Tailored for diverse customers, ensuring that everyone can find the right fit.",
    //   ],
    // },

    {
      title: "We are commitment to Customer Satisfaction",
      icon: HappyCustomer,
      iconBg: "#232323",
      date: "April 2019 - May 2019",
      points: [
        "Customer satisfaction is our top priority in everything we do.",
        "Actively seek feedback to improve our products and services.",
        "Dedicated customer service team available to assist with questions.",
        "Strive to exceed expectations for a hassle-free shopping experience.",
        "Aim to build long-lasting relationships through exceptional service.",
      ],
    },

    // {
    //   title: "Customer Satisfaction",
    //   // company_name: "Robotronix",
    //   // icon: Robotronixicon,
    //   icon: "Icon",
    //   iconBg: "#383E56",
    //   date: "April 2019 - May 2019",
    //   points: [
    //     "Customer satisfaction is our top priority in everything we do.",
    //     "Actively seek feedback to improve our products and services based on your needs.",
    //     "Continually refine offerings to ensure they meet customer expectations.",
    //     "Dedicated customer service team always available to assist with questions or concerns.",
    //     "Support with sizing and fit to ensure a seamless shopping experience.",
    //     "Strive to exceed expectations and provide an enjoyable, hassle-free shopping experience.",
    //     "Customers are valued and appreciated, with a focus on making them feel special.",
    //     "Commitment to ongoing improvement, ensuring your satisfaction remains central.",
    //     "Encourage open communication, welcoming feedback for continuous enhancement.",
    //     "Aim to build long-lasting relationships by offering exceptional customer service.",
    //   ],
    // },

    // {
    //   title: "Sustainable Practices",
    //   // company_name: "Robotronix",
    //   // icon: Robotronixicon,
    //   icon: "Icon",
    //   iconBg: "#383E56",
    //   date: "April 2019 - May 2019",
    //   points: [
    //     "Worked with sensors and actuators to interact with the physical world, including LEDs, motors, temperature sensors, etc",
    //     "Learned about the importance of power supply considerations, pin configurations, and wiring connections in Arduino projects.",
    //     "Learned about Arduino Uno, a widely used microcontroller board based on the ATmega328P microcontroller.",
    //     "Acquired knowledge of the Arduino programming language, which is based on a simplified version of C programming",
    //   ],
    // },
    // {
    //   title: "Community Involvement",
    //   // company_name: "Robotronix",
    //   // icon: Robotronixicon,
    //   icon: "Icon",
    //   iconBg: "#383E56",
    //   date: "April 2019 - May 2019",
    //   points: [
    //     "Worked with sensors and actuators to interact with the physical world, including LEDs, motors, temperature sensors, etc",
    //     "Learned about the importance of power supply considerations, pin configurations, and wiring connections in Arduino projects.",
    //     "Learned about Arduino Uno, a widely used microcontroller board based on the ATmega328P microcontroller.",
    //     "Acquired knowledge of the Arduino programming language, which is based on a simplified version of C programming",
    //   ],
    // },
  ];

  return (
    <>
      <div className="w-[94%] mx-auto">
        <h1 className="text-2xl mt-2 text-[#e8653f] text-center">
          <b>ABOUT MK TEXTITLES</b>
        </h1>
      </div>
      <div className="w-full my-3 relative">
        <img src={AboutUsImg} className="w-full" alt="About Us" />
        <h1 className="absolute lg:top-[10%] top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl md:text-2xl text-md font-bold text-black rounded-md px-1 py-1"
        style={{ backgroundColor: "rgba(245, 245, 245, 0.2)", width:"fit-content"}}>
          Welcome to MK Textiles
        </h1>
      </div>

      <div className="w-[94%] mx-auto">
        <p>
          <span className="text-justify my-2 block">
            Our goal at MK Textiles is to customize the premium textile
            solutions to different sectors. We deliver products that not only
            meet but also surpass our client's expectations because we are
            dedicated to excellence.
          </span>
          <span className="text-justify my-2 block">
            Our areas of expertise include Customized T-shirts, Sportswear,
            Teamwear, Corporate attire, School uniforms, and Accessories. Every
            category is expertly designed, guaranteeing that every article of
            clothing is both fashionable and functional. With the newest
            technology and highly talented craftspeople, our modern factory
            enables us to maintain the highest levels of quality in our
            production processes.
          </span>
          <span className="text-justify my-2 block">
            Apart from our regular products, we also specialize in making
            clothes that are specially customized to each customer's needs. We
            are able to produce clothes that accurately represent your brand and
            ideas thanks to this customized approach.
          </span>
          <span className="text-justify my-2 block">
            At MK Textiles, we think style and utility go hand in hand. Our wide
            selection of goods is made to offer outstanding value, guaranteeing
            our customers' total satisfaction.
            {/* By offering the best in textile
            innovation and design and developing enduring connections based on
            quality and trust, we are dedicated to assisting you in succeeding. */}
          </span>
          <span className="text-justify my-2 block">
            Allow us to work with you to develop exceptional textile solutions
            that will make a lasting impression on the market. With our capacity
            for manufacturing and commitment to quality, we guarantee that every
            project is carried out with care and accuracy.
          </span>
          <span className="text-justify my-2 block"></span>
        </p>
      </div>
      <div className="w-[94%] mx-auto">
        <h1 className="text-2xl my-4 text-[#e8653f] text-center">
          <b className="my-0">Our Vision</b>
        </h1>
        <div className="w-full py-2 flex">
          <FaHandPointRight className="MissionHandLogo" />
          <p className="ms-2">
            <b> Customer satisfaction:</b> We work hard consistently to go
            beyond the customer's expectations.
          </p>
        </div>
        <div className="w-full py-2 flex">
          <FaHandPointRight className="MissionHandLogo" />
          <p className="ms-2">
            <b>Customized Solutions:</b> We specialize in creating personalized
            T-shirts tailored to our clients’ unique needs, ensuring that each
            design reflects their identity according to clients’ choice.
          </p>
        </div>

        <div className="w-full py-2 flex">
          <FaHandPointRight className="MissionHandLogo" />
          <p className="ms-2">
            <b>Efficiency Focus: </b>The main objective of our approach is to
            support our customers' growth by minimizing input costs and
            maximizing output.
          </p>
        </div>

        <div className="w-full py-2 flex">
          <FaHandPointRight className="MissionHandLogo " />
          <p className="ms-2">
            <b>Tailored Approach:</b> Whether working with clients or
            internally, we think that every project should be managed with a
            tailored approach.
          </p>
        </div>

        <div className="w-full py-2 flex">
          <FaHandPointRight className="MissionHandLogo" />
          <p className="ms-2">
            <b>Employee Well-Being:</b> By treating our workers as complete
            beings and attending to their physical, mental, emotional, and
            spiritual requirements, we improve their performance.
          </p>
        </div>

        <div className="w-full py-2 flex">
          <FaHandPointRight
            className="MissionHandLogo"
            style={{ textSize: "40px" }}
          />
          <p className="ms-2">
            <b>Comfort of the Client:</b> Throughout their journey with us, we
            make sure that our clients feel safe and supported. We do this by
            offering committed support and open communication to foster trust
            and enduring partnerships.
          </p>
        </div>
        <div className="w-full py-2 flex">
          <FaHandPointRight className="MissionHandLogo" />
          <p className="ms-2">
            <b>Beyond Business:</b> At MK Textiles, we are committed to
            supporting women empowerment by creating opportunities for women in
            the textile industry, fostering their growth and independence.
          </p>
        </div>

        <div className="w-full py-2 flex">
          <FaHandPointRight className="MissionHandLogo" />
          <p className="ms-2">
            <b>Global Expansion:</b> Our goal is to increase our presence in the
            textile sector to unprecedented levels by growing rapidly on a
            global basis.
          </p>
        </div>
      </div>
      <h1 className="text-2xl my-4 text-[#e8653f] text-center">
        <b className="mb-">Why MK Textiles?</b>
      </h1>
      <div className="my-5 w-[90%] mx-auto ">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default AboutUs;

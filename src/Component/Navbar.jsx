import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import MKT_Logo from "../Images/Logo/MKT_Logo.png";
import { LuMenuSquare } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import MobileToggleSideBar from "./MobileToggleSideBar";

export default function Navbar({ children }) {
  const [isProduct, setIsProduct] = useState(false);
  const [isMobileProduct, setIsMobileProduct] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container fluid>
        <div className=" text-dark  justify-between text-light bg-white flex border-1">
          {/* <Col lg={2} className="d-flex align-items-center px-3">
            <h5>+91-6263988678</h5>
          </Col> */}
          <div className="d-flex justify-content-start ps-3">
            <img
              className="md:w-[150px] w-[70px]"
              src={MKT_Logo}
              alt=""
            />
          </div>
          {isMobile ? (
            <>
            <div
            className=""
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <LuMenuSquare 
            className="text-[24px] text-gray-600 my-2 me-3"
            onClick={() => setIsSideBarVisible(true)} />
            <MobileToggleSideBar
               isSideBarVisible={isSideBarVisible}
               setIsSideBarVisible={setIsSideBarVisible}
            />
            </div>
              {/* <div
               
                className="border-3 border-pink-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Toggle
              </div> */}
            </>
          ) : (
            <>
              <div
                
                className="d-flex align-items-center justify-end px-4 "
              >
              
                <ul
                  className="d-flex align-items-center justify-end gap-5 lg:text-[16px] md:text-[14px] text-[12px] cursor-pointer"
                  style={{ listStyle: "none" }}
                >
                  <li className="">
                    <NavLink to="/Pioneers" onClick={() => setIsProduct(false)}>
                      <b>PIONEERS</b>
                    </NavLink>
                  </li>
                  <li onClick={() => setIsProduct(!isProduct)}>
                    <NavLink to="/Shirts" >
                      <b>PRODUCT CATEGORY</b>
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/BeyondBusiness" onClick={() => setIsProduct(false)}>
                      <b>BEYONG BUSINESS</b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Careers" onClick={() => setIsProduct(false)}>
                      <b>CAREERS</b>
                    </NavLink>
                  </li>
                  {/* <li className="" >
                    <NavLink to="/AboutUs">
                      <b>ABOUT</b>
                    </NavLink>
                  </li> */}
                  <li className="">
                    <NavLink to="/AboutUs" onClick={() => setIsProduct(false)}>
                      <b>ABOUT US</b>
                    </NavLink>
                  </li>

                  <li className="">
                    <NavLink to="/ContactUs" onClick={() => setIsProduct(false)}>
                      <b>CONTACT US</b>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
        {isProduct && !isMobile ? (
          <Row>
            <Col
              xs={12}
              className="d-flex py-4 justify-content-center bg-[#e9643c] text-white"
            >
              <div className="d-flex justify-between w-[97%] mx-auto">
                <NavLink to="/Shirts">
                  <div className="text-white mx-auto lg:text-[16px] md:text-[14px] text-[12px]">
                    <b>SHIRT</b>
                  </div>
                </NavLink>
                <NavLink to="/Sports">
                  <div className="text-white mx-auto lg:text-[16px] md:text-[14px] text-[12px]">
                    <b>SPORTSWEAR</b>
                  </div>
                </NavLink>
                <NavLink to="/Promotional">
                  <div className="text-white mx-auto lg:text-[16px] md:text-[14px] text-[12px]">
                    <b>PROMOTIONAL CLOTHING</b>
                  </div>
                </NavLink>
                <NavLink to="/Corporate">
                  <div className="text-white mx-auto lg:text-[16px] md:text-[14px] text-[12px]">
                    <b>CORPORATEWEAR</b>
                  </div>
                </NavLink>
                <NavLink to="/Uniform">
                  <div className="text-white mx-auto lg:text-[16px] md:text-[14px] text-[12px]">
                    <b>SCHOOL UNIFORM</b>
                  </div>
                </NavLink>
                <NavLink to="/Accessories">
                  <div className="text-white mx-auto lg:text-[16px] md:text-[14px] text-[12px]">
                    <b>ACCESSORIES</b>
                  </div>
                </NavLink>
                <NavLink to="/DesignYourOwn">
                  <div className="text-white mx-auto lg:text-[16px] md:text-[14px] text-[12px]">
                    <b>DESIGN YOUR OWN</b>
                  </div>
                </NavLink>
              </div>
            </Col>
          </Row>
        ) : (
          ""
        )}
        
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
}

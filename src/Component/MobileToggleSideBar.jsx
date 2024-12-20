import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MobileToggleSideBar = ({ isSideBarVisible, setIsSideBarVisible }) => {
  const [isMobileProduct, setIsMobileProduct] = useState(false);

  const handleCloseSidebar = () => {
    setIsSideBarVisible(false); // Correctly closes the sidebar
  };
  const handleDesignCloseSidebar = () => {
    setIsSideBarVisible(false); // Closes the sidebar
    toast.error(
      "Coming soon... We're crafting something amazing here. Stay tuned!"
    ); // Display the error toast
  };

  return (
    <>
      <div
        className={`offcanvas offcanvas-end ${isSideBarVisible ? "show" : ""}`}
        id="canvasSearch"
        aria-modal="true"
        role="dialog"
        style={{ width: "70%", background: "#222222" }}
      >
        <div className="canvas-wrapper text-white">
          <header
            className=" bg-[#404243] py-1"
            style={{ marginTop: "910px !important" }}
          >
            <div className="flex w-[100%] mx-auto justify-between my-1 px-1 ">
              <span>Menu</span>
              <div className="close my-1" onClick={handleCloseSidebar}>
                <AiOutlineClose className="me-2" />
              </div>
            </div>
          </header>
          <div className="d-block align-items-center justify-end text-white w-[100%]">
            <ul
              className="d-block align-items-center gap-5 lg:text-[16px] md:text-[14px] text-[12px] cursor-pointer"
              style={{ listStyle: "none" }}
            >
              <li
                className="py-1 px-1 hover:bg-slate-700"
                style={{ borderBottom: "0.1px solid #7d8085" }}
              >
                <NavLink to="/" onClick={handleCloseSidebar}>
                  <b>ABOUT US</b>
                </NavLink>
              </li>

              <li
                onClick={() => setIsMobileProduct(!isMobileProduct)}
                className="py-1 px-1 flex justify-between"
                style={{ borderBottom: "0.1px solid #7d8085" }}
              >
                <NavLink to="/Product/TShirt" className="hover:bg-slate-700">
                  <b>PRODUCT CATEGORY</b>
                </NavLink>
                <IoIosArrowDown />
              </li>
              {isMobileProduct && (
                <div className="d-block justify-between w-[100%] px-2 mx-auto">
                  <NavLink
                    to="/Product/TShirt"
                    onClick={handleCloseSidebar}
                    className="hover:bg-slate-700"
                  >
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1">
                      <b>T-SHIRTS</b>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/Product/Hoodies"
                    onClick={handleCloseSidebar}
                    className="hover:bg-slate-700"
                  >
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>HOODIES</b>
                    </div>
                  </NavLink>
                  <NavLink to="/Product/Tracksuits" onClick={handleCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>TRACKSUITS</b>
                    </div>
                  </NavLink>
                  <NavLink to="/Product/Sweaters" onClick={handleCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>SWEATSHIRTS</b>
                    </div>
                  </NavLink>
                  <NavLink to="/Product/Jackets" onClick={handleCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>JACKETS</b>
                    </div>
                  </NavLink>
                  <NavLink to="/Product/Bottoms" onClick={handleCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>BOTTOM</b>
                    </div>
                  </NavLink>
                  <NavLink to="/Product/Uniform" onClick={handleCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>SCHOOL UNIFORM</b>
                    </div>
                  </NavLink>
                  <NavLink to="/Product/Jersey" onClick={handleCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>JERSEY</b>
                    </div>
                  </NavLink>
                  <NavLink to="/Product/CricketKit" onClick={handleCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>CRICKET KIT</b>
                    </div>
                  </NavLink>
                  <NavLink to="/Product/Accessories" onClick={handleCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>ACCESSORIES</b>
                    </div>
                  </NavLink>
                  <NavLink to="/" onClick={handleDesignCloseSidebar}>
                    <div className=" mx-auto lg:text-[16px] md:text-[14px] text-[12px] py-1 hover:bg-slate-700">
                      <b>DESIGN YOUR OWN</b>
                    </div>
                  </NavLink>
                </div>
              )}
              <li
                className="py-1 px-1"
                style={{ borderBottom: "0.1px solid #7d8085" }}
              >
                <NavLink
                  to="/BeyondBusiness"
                  onClick={handleCloseSidebar}
                  className="hover:bg-slate-700"
                >
                  <b>BEYOND BUSINESS</b>
                </NavLink>
              </li>
              <li
                className="py-1 px-1 hover:bg-slate-700"
                style={{ borderBottom: "0.1px solid #7d8085" }}
              >
                <NavLink to="/Careers" onClick={handleCloseSidebar}>
                  <b>CAREERS</b>
                </NavLink>
              </li>
              <li
                className="py-1 px-1"
                style={{ borderBottom: "0.01px solid #7d8085" }}
              >
                <NavLink
                  to="/Pioneers"
                  onClick={handleCloseSidebar}
                  className="hover:bg-slate-700"
                >
                  <b>PIONEERS</b>
                </NavLink>
              </li>

              <li
                className="py-1 px-1 hover:bg-slate-700"
                style={{ borderBottom: "0.1px solid #7d8085" }}
              >
                <NavLink to="/ContactUs" onClick={handleCloseSidebar}>
                  <b>CONTACT US</b>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={handleCloseSidebar}
        className={`offcanvas-backdrop fade ${
          isSideBarVisible ? "show" : "d-none"
        }`}
      />
    </>
  );
};

export default MobileToggleSideBar;

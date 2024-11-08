import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
const DesignYourOwn = () => {
  useEffect(() => {});

  return (
    <>
      <div className="w-full flex border-5 border-red-400">
        <div className="w-[60%] border-1 border-black">j </div>
        <div className="w-[40%] border-1 border-black">
        <h1 className="m-2">Choose pattern</h1>
        <div className="flex flex-wrap">
        
          <img src={""} alt="" className="w-[80px] h-[80px] rounded-md m-3 border-1 " />
        
        </div>
        </div>
      
      </div>
    </>
  );
};

export default DesignYourOwn;

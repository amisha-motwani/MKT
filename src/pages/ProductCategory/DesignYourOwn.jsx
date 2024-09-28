import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HalfSleeves1 from "../../Images/Logo/HalfSleeves1.png";
import FullSleeves1 from "../../Images/Logo/FullSleeves1.png";
import Shorts from "../../Images/Logo/Shorts.png";
import HalfSleeves3 from "../../Images/Logo/HalfSleeves3.png";
import jeans from "../../Images/Logo/jeans.png"
import Slider from "react-slick";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Carousel } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ClassicEditor from "../../Component/MyClassicEditor";

// @import 'slick-carousel/slick/slick.css';
// @import 'slick-carousel/slick/slick-theme.css';

const DesignYourOwn = () => {
  const images = [
    { src: FullSleeves1, alt: "Full Sleeves 1" },
    { src: HalfSleeves1, alt: "Half Sleeves 1" },
    { src: Shorts, alt: "Shorts" },
    { src: HalfSleeves3, alt: "Half Sleeves 3" },
    { src: jeans, alt: "Jeans" },
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  const [overlayColor, setOverlayColor] = useState("");
  const [text, setText] = useState("");
  const [position, setPosition] = useState({ top: 50, left: 50 }); // Adjust initial position if needed
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const { top, left } = textRef.current.getBoundingClientRect();
    setStartPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        top: e.clientY - startPosition.y,
        left: e.clientX - startPosition.x,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleChange = (event, editor) => {
    const data = editor.getData();
    setText(data);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const colors = [
    "bg-red-600", // Tailwind red
    "bg-blue-600", // Tailwind blue
    "bg-green-600", // Tailwind green
    "bg-yellow-500", // Tailwind yellow
    "bg-gray-800", // Tailwind gray
    "bg-pink-500", // Tailwind pink
    "bg-purple-600", // Tailwind purple
    "bg-teal-600", // Tailwind teal
    "bg-indigo-600", // Tailwind indigo
    "bg-dark", // CoreUI dark
    "bg-primary", // CoreUI primary
    "bg-info", // CoreUI info
    "bg-warning", // CoreUI warning
    "bg-success", // CoreUI success
    "bg-light", // CoreUI light
    "bg-secondary", // CoreUI secondary
    "bg-danger", // CoreUI danger
  ];

  // Slider settings
  const settings = {
    dots: true, // Enable dots below the carousel
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    arrows: true, // Enable arrows
  };

  return (
    <>
      <Container fluid className="my-1">
        <Row>
          <Col xs={12} className="text-center my-3">
            <h1>Design Your Own</h1>
            <p>
              Design and create your own Custom Sportswear today! Upload your
              logos and artwork using our Online Designer. If you need advice
              please email us at sales@personalisedsports.com or call on 01268
              471741.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col xs={6} className="border-1 border-black px-2 relative">
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className={`w-full h-[400px] ${overlayColor} opacity-50 pointer-events-none`}
            />
            <div
              ref={textRef}
              style={{
                zIndex: 1000,
                position: "absolute",
                top: position.top,
                left: position.left,
                transform: "translate(-50%, -50%)",
                color: "#000",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                padding: "5px",
                // border: "1px solid gray",
                cursor: isDragging ? "grabbing" : "grab",
                userSelect: "none",
              }}
              onMouseDown={handleMouseDown}
            >
              <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          </Col>
          <Col xs={6} className="border-1 border-black px-2 mb-5">
            <h1 className="my-2">Choose type:</h1>
            <div className="w-[200px] h-[300px] ms-4">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      className="d-block w-full h-full border-1 border-dark bg-[#f4e9c5] p-2 cursor-pointer"
                      src={image.src}
                      alt={image.alt}
                      onClick={() => setMainImage(image)}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <h1 className="my-2">Choose colour</h1>
            <div className="flex flex-wrap gap-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-[30px] h-[30px] rounded-md ${color} cursor-pointer`}
                  onClick={() => setOverlayColor(color)}
                />
              ))}
            </div>
            <h1 className="my-2">Add text:</h1>
            {/* <CKEditor
              editor={ClassicEditor}
              data={text}
              onChange={handleChange}
            /> */}
            <ReactQuill
              value={text}
              onChange={(value) => setText(value)}
              modules={modules}
              formats={formats}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
// Quill modules and formats configuration
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }, { size: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
  "image",
  "color",
  "background",
  "align",
];

export default DesignYourOwn;

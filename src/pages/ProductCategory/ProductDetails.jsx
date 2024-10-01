import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BASE_URL from "../../API/Api";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetails() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size
  const [selectedColor, setSelectedColor] = useState(null); // State for selected color

  const { id } = useParams();
  console.log("Id==>", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "Secret-Key": "JourneyToSuccess",
        };

        const response = await fetch(
          `${BASE_URL}/api/notes/fetch/Product/${id}`,
          {
            method: "GET",
            headers: headers,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const jsonData = await response.json();
        setData(jsonData);
        // Set the image state once data is fetched
        if (jsonData?.image) {
          const imagesArray = jsonData.image
            .split(", ")
            .map((img) => img.trim());
          setImages(imagesArray);

          if (imagesArray.length > 0) {
            setImage(imagesArray[0]);
          }

          if (jsonData?.size) {
            const sizeArray = jsonData.size.split(", ").map((size) => ({
              label: size,
              value: size,
            }));
            setSizeOptions(sizeArray);
          }
          // Process images
          // Process colors
          if (jsonData?.color) {
            const colorsArray = jsonData.color
              .split(",") // Split by comma
              .map((color) => color.trim()); // Trim any extra spaces
            setColors(colorsArray); // Update state with the array of colors
          }
          // setImage(`${BASE_URL}/${jsonData.image.split(", ")[0]}`);
        }
      } catch (error) {
        console.error("Fetch error:", error); // Log the error for debugging
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  console.log("Data==>", data);
  console.log("Images-->", images);
  console.log("image-->", images[0]);

  // ------Whatsapp code ---------

  // const handleWant = () => {

  //   const message = `Hello, I'm interested in the following product:\n\nTitle: ${data?.title}\nDescription: ${data?.description}\nColour: ${selectedColor}\nSize: ${selectedSize}\nImage: ${BASE_URL}/${image}`;

  //   const phoneNumber = "+919039333112"; // Replace with the phone number you want to send the message to
  //   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  //   window.open(whatsappUrl, "_blank"); // Open WhatsApp chat in a new tab
  // };
  const handleWant = () => {
    const message = `Hello, I'm interested in the following product:\n\nTitle: ${data?.title}\nDescription: ${data?.description}\nColour: <div className:"w-[30px] h-[30px]">${selectedColor}</div>\nSize: ${selectedSize}\nImage: ${BASE_URL}/${image}`;
    const phoneNumber = "+919039333112"; // Replace with the phone number you want to send the message to
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank"); // Open WhatsApp chat in a new tab
  };

  console.log("Size selected by user", selectedSize);
  console.log("Colour choosed by user", selectedColor);

  return (
    <>
      <h1></h1>
      <div className="w-full py-2 px-2 md:flex block my-3">
        <div className="photo_list md:w-[10%] w-[100%] justify-center h-auto imageOptions">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-[90px] h-[90px] border-1 border-gray-300 my-2 rounded-lg mx-auto"
            >
              <img
                src={`${BASE_URL}/${img}`} // Ensure image path is correct
                className="w-full h-full mx-auto rounded-lg cursor-pointer"
                alt={`Product image ${index + 1}`}
                onClick={() => setImage(img)}
              />
            </div>
          ))}
        </div>
        <div className="Photo md:w-[50%] w-[100%] rounded-[10px]">
          {image && (
            <img
              src={`${BASE_URL}/${image}`}
              alt="Product Image"
              className=" w-[500px] h-[550px] rounded-[10px] "
            />
          )}
        </div>
        <div className="details md:w-[50%] w-[100%] px-3">
          <h1 className="text-lg font-bold text-justify">{data?.title}</h1>
          <hr className="my-2 " />
          <h3 className="text-md text-justify">{data?.description}</h3>
          <h1 className="font-bold my-2 text-md">Colour</h1>
          <div className="flex gap-2 my-2 flex-wrap">
            {/* {colors.map((color, index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] rounded-md border-1"
                style={{ backgroundColor: `${color}` }}
                title={color} // Adds a tooltip with the color value
              ></div>
            ))} */}
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-[40px] h-[40px] rounded-md border-1 cursor-pointer ${
                  selectedColor === color ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: `${color}` }}
                title={color} // Adds a tooltip with the color value
                onClick={() => setSelectedColor(color)} // Update selected color
              ></div>
            ))}
          </div>

          <h1 className="font-bold my-2 text-md">Size</h1>
          <div className="w-[65px]">
            <Form.Select
              style={{ width: "300px", padding:"10px" }}

              aria-label="Select Size px-2 border-1"
              onChange={(e) => setSelectedSize(e.target.value)} // Update selected size
            >
              <option value="">Select Size</option>
              {sizeOptions.map((size, index) => (
                <option key={index} value={size.value} className="px-2">
                  {size.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <h1 className="font-bold my-2 text-md">Product details</h1>
          <div className="flex gap-5 ">
            <div>
              <ul className="font-bold text-md">
                <li>Material composition</li>
                <li>Sleeve type</li>
                <li>Printing area</li>
                <li>Printig charges</li>
                <li>Country of Origin</li>
              </ul>
            </div>
            <div>
              <ul className="text-md">
                <li>{data?.fabric}</li>
                <li>{data?.sleeves_type}</li>
                <li>{data?.printing_area}</li>
                <li>{data?.printing_charges}</li>
                <li>India</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-start gap-2 items-center">
            {/* <h1>Price:</h1> */}
            <h1 className="text-black my-2 text-[18px]">{data?.price}/-</h1>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              className="w-[fit-content] h-[fit-content] border-1 rounded-full px-3 py-1 mt-4 mx-auto text-white bg-green-500"
              onClick={handleWant}
            >
              Want it?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { React, useState, useEffect, createContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-vertical-timeline-component/style.min.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes.jsx";
import "./App.css";
import "./CustomizedCSS/CustomisedCSS.scss";
import "react-quill/dist/quill.snow.css"; // Add this to your main file
import BASE_URL from "./API/Api.jsx";

const data = createContext();
const data1 = createContext();

function App() {
  const [product, setProduct] = useState("");

  useEffect(() => {
    // Call the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/server`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text(); // Assuming the response is in text form
        console.log("Server Status:", data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
    // Set an interval to call fetchData every 5 minutes (300000 ms)
    const intervalId = setInterval(fetchData, 300000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ToastContainer />
      <data.Provider value={product}>
        <data1.Provider value={setProduct}>
          <AppRoutes />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;

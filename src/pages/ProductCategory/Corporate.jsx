import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../Component/ProductCard";
import BASE_URL from "../../API/Api";

const Corporate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "Secret-Key": "JourneyToSuccess",
        };

        const response = await fetch(
          `${BASE_URL}/api/notes/fetchallSearched/Product?category=Corporatewear`,
          {
            method: "GET",
            headers: headers,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (product) => {
    console.log("Details clicked");
    console.log(product); 
    const ID = product._id;
    navigate(`./Details/${ID}`);
  };
  
  console.log("data==>", data);
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="text-center my-3 px-3">
            <h1>Corporate Sports Clothing</h1>
            <p>
              Check out our top-selling corporate sports apparel choices,
              featuring a direct link to our Corporate Running Shirts page
              offering a wide range of technical, gender-specific, and
              environmentally friendly T-shirts, as well as some illustrations
              of the personalised sportswear we've produced for our clients.
              Consult our blog for suggestions and tips on what to wear to your
              corporate sports activity.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="flex flex-wrap justify-evenly gap-2">
              {data?.map((data, index) => (
                <ProductCard key={index} product={data}
                onClick={() => handleDetailsClick(product)} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Corporate;

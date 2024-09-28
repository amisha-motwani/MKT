import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../Component/ProductCard";
import BASE_URL from "../../API/Api";

export default function Fitness() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "Secret-Key": "JourneyToSuccess",
        };

        const response = await fetch(`${BASE_URL}/api/notes/fetchallSearched/Product?category=Fitnesswear`, {
          method: "GET",
          headers: headers,
        });
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
          <Col xs={12} className="text-center my-3 px-3">
            <h1>Custom Fitness Clothing</h1>
            <p>
              Our range of Custom Fitness Clothing includes uniforms, apparel,
              accessories and a selection of case studies.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="flex flex-wrap justify-evenly gap-2">
              {data?.map((data, index) => (
                <ProductCard key={index} product={data} 
                  onClick={() => handleDetailsClick(product)}
                  
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../Component/ProductCard";
import BASE_URL from "../../API/Api";
import { useNavigate } from "react-router-dom";

function Shirt() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
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
          `${BASE_URL}/api/notes/fetchallSearched/Product?category=Shirt`,
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
          <Col xs={12}>
            <div className="flex flex-wrap justify-evenly gap-2 my-3">
              {data?.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
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

export default Shirt;

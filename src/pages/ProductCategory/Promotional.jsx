import { React, useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "../../Component/ProductCard";
import BASE_URL from "../../API/Api";
import { useNavigate } from "react-router-dom";

const Promotional = () => {
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
          `${BASE_URL}/api/notes/fetchallSearched/Product?category=Promotional`,
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
    navigate(`/Details/${ID}`);
  };

  console.log("data==>", data);

  return (
    <>
    <Container fluid>
      <Row>
        <Col xs={12}>
          {isLoading ? (
            <div className="d-flex justify-content-center" style={{ height: "100vh" }}>
                <Spinner animation="border" role="status" className="my-5">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
          ) : (
            <div className="flex flex-wrap justify-evenly gap-2 my-3">
              {data?.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={() => handleDetailsClick(product)}
                />
              ))}
            </div>
          )}
          {error && <p className="text-danger text-center">{error.message}</p>}
        </Col>
      </Row>
    </Container>
  </>
  );
};
export default Promotional;

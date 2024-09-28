import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../Component/ProductCard";
import BASE_URL from "../../API/Api";

const Uniform = () => {
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

        const response = await fetch(`${BASE_URL}/api/notes/fetchallSearched/Product?category=Uniform`, {
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
            <h1>Sports & Events</h1>
            <p>
              Are you looking for specific custom clothing for your sport or
              event? Our range of custom sports apparel has been selected with
              your needs in mind. From running to golf we have got it covered.
              Our ranges make it easy for you to choose clothing that
              complements your branding and logos. Once you have placed your
              order our production team will tap into their years of printing
              experience to ensure that your items are reproduced to the highest
              quality.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="flex flex-wrap justify-evenly gap-2 ">
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
};
export default Uniform;

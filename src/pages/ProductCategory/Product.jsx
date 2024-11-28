import { React, useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "../../Component/ProductCard";
import BASE_URL from "../../API/Api";
import Form from "react-bootstrap/Form";

const Product = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(id);

  const handleTShirtChange = (event) => {
    const selectedValue = event.target.value; // Get the selected value
    console.log("Selected value:", selectedValue); 
    setProduct(selectedValue);
  };

  useEffect(() => {
    console.log("Updating product state from URL params");
    setProduct(id); // Update product state when id changes
  }, [id]);

  useEffect(() => {
    console.log("product from URL params:", product);
    console.log("ID from URL params:", id);

    const fetchData = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "Secret-Key": "JourneyToSuccess",
        };

        const response = await fetch(
          `${BASE_URL}/api/notes/fetchallSearched/Product?category=${product}`,
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
  }, [product]);

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
        {id === "TShirt" && (
          <div className="my-3 w-[50%] mx-auto">
            <Form.Select
              aria-label="Default select example"
              onChange={handleTShirtChange}
              style={{ width: "100%" }}
            >
              <option value="TShirt"> T-Shirt </option>
              <option value="WorkTShirt"> Work T-Shirt </option>
              <option value="PoloTShirt"> Polo T-Shirt </option>
              <option value="PromotionalTShirt">Promotional T-Shirt</option>
              <option value="RunningTShirt"> Running T-Shirt </option>
              <option value="SandowsTShirt"> Sandows T-Shirt </option>
              <option value="KabbadiShirt"> Kabbadi T-Shirt </option>
            </Form.Select>
          </div>
        )}
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
export default Product;

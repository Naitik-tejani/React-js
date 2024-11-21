import React from 'react';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
      }
    };

    fetchProducts();
  }, []);


  return (
    <div>
     <Container className="mt-4">
      <h1 className="text-center mb-4">Product List</h1>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading...</p>
        </div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${product.price} <br />
                    <strong>Rating:</strong> {product.rating}/5
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
    </div>
  );
};

export default App;
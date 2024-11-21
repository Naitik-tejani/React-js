import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner, Badge, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Container className="mt-4">
      <h2 className="text-center mb-4 text-primary">**API callin fetch method**</h2>
        <h1 className="text-center mb-4 text-primary">Featured Products</h1>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Fetching the latest products for you...</p>
          </div>
        ) : (
          <Row>
            {products.map((product, index) => (
              <Col
                key={product.id}
                sm={12}
                md={6}
                lg={4}
                className={`mb-4 animate__fade-in animate__delay-${index % 3}`}
              >
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-truncate">{product.title}</Card.Title>
                    <Card.Text className="text-muted mb-2" style={{ flex: 1 }}>
                      {product.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-success">
                        <strong>${product.price}</strong>
                      </h5>
                      <Badge bg="info">{product.rating} ★</Badge>
                    </div>
                    <Button variant="primary" className="mt-3 w-100">
                      View Details
                    </Button>
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

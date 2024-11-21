import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4 text-primary">Delicious Recipes</h1>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Fetching recipes for you...</p>
        </div>
      ) : (
        <Row>
          {recipes.map((recipe) => (
            <Col key={recipe.id} sm={12} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={recipe.thumbnail}
                  alt={recipe.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-truncate">{recipe.title}</Card.Title>
                  <Card.Text className="text-muted mb-2" style={{ flex: 1 }}>
                    {recipe.description}
                  </Card.Text>
                  <Button variant="primary" className="mt-3 w-100">
                    View Recipe
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

const App = () => {
  return (
    <div>
      <Recipes />
    </div>
  );
};

export default App;

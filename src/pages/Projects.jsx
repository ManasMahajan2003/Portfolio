import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <Container fluid>
      <Card className="text-center mb-3">
        <Card.Header><b>Airbnb Clone</b></Card.Header>
        <Card.Body>
          <Card.Title>An Airbnb clone while learning about different backend concepts.</Card.Title>
          <Card.Text>Implemented MVC design pattern.</Card.Text>
          <Button href="https://airbnb-clone-g9gj.onrender.com" variant="primary" className="m-1">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/Wanderlust" variant="primary" className="m-1">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Node.js  Express.js MongoDB</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>MERN Blog App</b></Card.Header>
        <Card.Body>
          <Card.Title>A MERN Stack Blog website</Card.Title>
          <Card.Text>Focused on implementing CRUD operations</Card.Text>
          <Button href="https://github.com/ManasMahajan2003/MERN_BLOG" variant="primary" className="m-1">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js MongoDB Node.js Express.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>Weather App</b></Card.Header>
        <Card.Body>
          <Card.Title>A weather app using APIs in React</Card.Title>
          <Card.Text>Takes location input from user and display weather with good UX design</Card.Text>
          <Button href="https://weather-application-gray-phi.vercel.app/" variant="primary" className="m-1">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/Weather-Application" variant="primary" className="m-1">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>Food Recipe App</b></Card.Header>
        <Card.Body>
          <Card.Title>React app for fetching food recipes from an API</Card.Title>
          <Card.Text>Takes user input and gets recipe result, "Add to Favorites" feature included</Card.Text>
          <Button href="https://food-recipe-app-pi-ten.vercel.app/" variant="primary" className="m-1">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/FoodRecipe-App" variant="primary" className="m-1">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>Shopping Cart</b></Card.Header>
        <Card.Body>
          <Card.Title>Fetched products from an API and added "Add to cart" feature</Card.Title>
          <Card.Text>Motive of the project was to work with redux-toolkit and learn about cart features</Card.Text>
          <Button href="https://shopping-cart-seven-ashy.vercel.app/" variant="primary" className="m-1">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/ShoppingCart" variant="primary" className="m-1">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js</Card.Footer>
      </Card>
    </Container>
  );
};

export default Projects;

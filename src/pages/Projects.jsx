import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <Container fluid>
      <div className='projects-heading-container'><h2 className='projects-heading'>My Projects</h2></div>
      <Card className="text-center mb-3">
        <Card.Header><b>Ecommerce Website</b></Card.Header>
        <Card.Body>
          <Card.Title>A complete MERN stack project using redux toolkit</Card.Title>
          <Card.Text>Incorporated various features like user authentication, admin features, CRUD operations of products, categories, users. Cart, favorites and payment features included. </Card.Text>
          <Button href="https://github.com/ManasMahajan2003/Ecommerce-Website" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js MongoDB Node.js Express.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>StaySphere</b></Card.Header>
        <Card.Body>
          <Card.Title>An Airbnb inspired website made while learning about different backend concepts.</Card.Title>
          <Card.Text>It was my first big project in which I learned about user authentication, middlewares, error handling etc and understood about MVC design pattern.</Card.Text>
          <Button href="https://airbnb-clone-g9gj.onrender.com" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/Wanderlust" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Node.js Express.js MongoDB</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>Expense Tracker App</b></Card.Header>
        <Card.Body>
          <Card.Title>Expense Tracking Application for daily usage</Card.Title>
          <Card.Text>Utilized third party library "Chakra UI" to represent expenses and income in a user friendly way.</Card.Text>
          <Button href="https://expense-tracker-app-three-azure.vercel.app/" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/Expense-Tracker-App" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>MERN Blog App</b></Card.Header>
        <Card.Body>
          <Card.Title>A MERN Stack Blog website</Card.Title>
          <Card.Text>After learning React, I wanted to experience that how I can connect it with backend. So i made this project and focused on basic CRUD operations.</Card.Text>
          <Button href="https://mern-blog-roan.vercel.app/" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/MERN_BLOG" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js MongoDB Node.js Express.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>Weather App</b></Card.Header>
        <Card.Body>
          <Card.Title>A weather app using APIs in React</Card.Title>
          <Card.Text> This project was made while learning React which takes location input from user and display weather with good UX design. </Card.Text>
          <Button href="https://weather-application-gray-phi.vercel.app/" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/Weather-Application" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>Food Recipe App</b></Card.Header>
        <Card.Body>
          <Card.Title>React app for fetching food recipes from an API</Card.Title>
          <Card.Text>Takes user input and gets recipe result, Learned about "Add to Favorites" feature.</Card.Text>
          <Button href="https://food-recipe-app-pi-ten.vercel.app/" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/FoodRecipe-App" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>Shopping Cart</b></Card.Header>
        <Card.Body>
          <Card.Title>React project utilizing Redux Toolkit</Card.Title>
          <Card.Text>The motive of this project was to work with redux-toolkit and learn about cart features</Card.Text>
          <Button href="https://shopping-cart-seven-ashy.vercel.app/" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/ShoppingCart" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">React.js</Card.Footer>
      </Card>
      <Card className="text-center mb-3">
        <Card.Header><b>Desktop Spotify clone</b></Card.Header>
        <Card.Body>
          <Card.Title>CSS Project of Desktop Spotify</Card.Title>
          <Card.Text>Basic project made during early days of learning HTML, CSS and Javascript</Card.Text>
          <Button href="https://manasmahajan2003.github.io/Spotify-clone/" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">View project</Button>
          <Button href="https://github.com/ManasMahajan2003/Spotify-clone" variant="primary" className="m-1" target="_blank" rel="noopener noreferrer">GitHub repository</Button>
        </Card.Body>
        <Card.Footer className="text-muted">HTMl CSS</Card.Footer>
      </Card>
      
    </Container>
  );
};

export default Projects;
import { Container, Card } from 'react-bootstrap';
import qrCodeImage from "./assets/image-qr-code.png";
import './App.css';

function App() {
  return (
    <Container fluid className="main-container">
      <Card>
        <Card.Img variant="top" src={qrCodeImage} />
        <Card.Body>
          <Card.Title>Improve your front-end skills by building projects</Card.Title>
          <Card.Text>
            Scan the QR code to visit Frontend Mentor and take your coding skills to
            the next level
          </Card.Text>
        </Card.Body>
      </Card>


      <div className="attribution">
        <span>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> 
        </span>
        <span>
          Coded by <a href="https://fintatum.com" target="_blank">Fin Tatum</a>
        </span>
        
      </div>
    </Container>
  );
}

export default App;

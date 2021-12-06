import { useAuth } from "../util/auth";
import { Container, Row, Col, Stack, Carousel } from "react-bootstrap";
import niagara from "../images/niagaraFalls.jpg"
import "./landmarkPage.css"



export default function Landmark() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      <hr />
      <Container>
        <Row>
          <h2 style={{ textAlign: "center" }}>
            placeholder for Landmark.title
          </h2>
        </Row>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <h3 style={{ textAlign: "center" }}>
              placeholder for registration date
            </h3>
          </Col>
          <Col xs={1}>
            <button>Was Here</button>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container style={{margin: "0"}}>
        <Row>
          <Col xs={3} style={{position: "relative"}, {left: "30px"}}>
            <Row>Total vists: landmark.visits </Row>
            <hr />
            <Row>Placeholder Img of landmark.image_url
              <img src={niagara}/>
            </Row>
            <hr />
            <Row>Place holder of landmark.description
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque
        explicabo ipsum, facilis repellendus omnis amet in accusantium quisquam
        nam qui consectetur sunt distinctio nemo molestiae ratione. Iure,
        aliquam debitis.</Row>
          </Col>
          <Col xs={9}>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={niagara}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={niagara}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={niagara}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </Col>
        </Row>
      </Container>
      <p>
        
      </p>
    </div>
  );
}
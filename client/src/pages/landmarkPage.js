import { useAuth } from "../util/auth";
import React, { useState, useEffect } from "react";
import { oneLandmarks } from "../util/api";
import { useLocation } from "react-router";
import { Container, Row, Col, Stack, Carousel, Form, Button, Accordion } from "react-bootstrap";
import niagara from "../images/niagaraFalls.jpg"
import "./landmarkPage.css"
import { useHistory} from "react-router-dom";

// Fetch request for submitting form to profile. 
// const landmarkResponse = await fetch('/api/landmark', {
//   method: 'POST',
//   body: JSON.stringify({ location, startDate, endDate, rating, food, experience, lesson, revisit }),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// });
export default function Landmark() {
  const location = useLocation();
  const landmarkID = location.pathname.split('/')[2];
  const [result, setResults] = useState([
    {
      name:"placeholder",
      description: "a description of this really old place",
      id: "https://parkwebsite.com",
      image: "placeholder",
    }
  ]);
  console.log(result)
  useEffect(() => {
    oneLandmarks(`${landmarkID}`)
    .then((data) => {
      // console.log(data)
      // console.log(data.name)
      // console.log(data.imageUrl)
      setResults(data)
    })
  },[landmarkID])

  const history = useHistory();
  const handleClick= () => history.push('/profile');
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      <hr />
      <Container>
        <Row>
          <h2 style={{ textAlign: "center" }}>
            {result.name}
          </h2>
        </Row>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <h3 style={{ textAlign: "center" }}>
              {/* placeholder for registration date */}
            </h3>
          </Col>
          <Col xs={1}>
            {/* <button>Was Here</button> */}
          </Col>
        </Row>
      </Container>
      <hr />
      <Container style={{margin: "0"}}>
        <Row>
          <Col xs={3} style={{position: "relative"}, {left: "30px"}}>
            <Row>Total vists: {result.visits} </Row>
            <hr />
            <Row>
              <img src={result.imageUrl}/>
            </Row>
            <hr />
            <Row>{result.description}</Row>
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

{/* Form Section */}
<Container>
<Accordion className=" accordionform"defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header className="accordionheader">Post your trip!</Accordion.Header>
    <Accordion.Body>
<Form class="newTripSubmit">
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="I Was Here" />
    </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment about your trip</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Label>Rate your trip</Form.Label>
      <br/>
      <Form.Check
        inline
        label="1"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="2"
        name="group2"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="3"
        name="group3"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="4"
        name="group4"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="5"
        name="group5"
        type={type}
        id={`inline-${type}-1`}
      />
    </div>
  ))}
   <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Upload Picture?(Maybe)</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
    <Button variant="outline-info" onClick={handleClick}>Submit</Button>
  </Form>
  </Accordion.Body>
  </Accordion.Item>
  </Accordion>
</Container>
          </Col>
        </Row>
      </Container>
      <p>
        
      </p>
    </div>
  );
}
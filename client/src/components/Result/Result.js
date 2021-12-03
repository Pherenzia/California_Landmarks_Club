import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Result.css";

function Result({ result }) {
  const { name, link, description } = result;
  return (
    <Card className="resultCard">
      <div className="leftDiv">
        <Card.Img variant="left" src="https://via.placeholder.com/300x200" />
      </div>
      <div className="rightDiv">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button className="landmarkBtn" variant="primary">Check it out!</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Result;

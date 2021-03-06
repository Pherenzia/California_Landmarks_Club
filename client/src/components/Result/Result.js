import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Result.css";
import { Link } from "react-router-dom";

function Result({ result }) {
  const { name, id, description, imageUrl } = result;
  return (
    <Card className="resultCard">
      <div className="leftDiv">
        <Card.Img variant="left" src={imageUrl} width="300" height="200"/>
      </div>
      <div className="rightDiv">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
            <Link
            className="btn btn-primary btn-block btn-squared"
            to={`/landmarkpage/${id}`}
            >Check it out!
            </Link>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Result;

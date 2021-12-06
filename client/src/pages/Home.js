import { useAuth } from "../util/auth";
import { Button, Container, Form, FormControl, Image, Card } from "react-bootstrap";
import "./Home.css"
// import Map from "../components/Map"; possible idea for reusing components


export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <Container className="homeBackground">
      <Card style={{ height:'60rem', width: '70rem', marginTop: '1rem' }} className="homepic center mx-auto">
  
        {/* TODO: display logged in user's username */}
        <h1>Welcome to California Landmark Club {isLoggedIn ? user.username : "Guest"}!</h1>
        <hr />
        <h3>
          Have you ever wanted to see if others like to get out and explore as much as you do?  
          Well California landmarks club can help you connect with others.  
          Simply sign up to start today!
        </h3>

      <br/>
      <Form Style={{ width:'50rem', marginTop: '5rem'}} className="mx-auto">
        <Form.Group className="mb-3" controlId="formBasicSearch">
        <Form.Label>Search by location, city, or zipcode</Form.Label>
        <FormControl type="search" placeholder="Search" />
        {/* <Form.Text className="text-muted">Search by location, city, or zipcode</Form.Text> */}
        </Form.Group>
        

        <Button variant="primary" type="submit">Submit</Button>

      </Form>

        {/* <Map/> possible idea reusing components refer to line 7*/}
        <div className="d-flex justify-content-around homeMap">
        {/* <Container> */}
        <Image style={{ width: '40rem', marginTop: '.5rem' }} src="https://www.howtogeek.com/wp-content/uploads/2021/01/google-maps-satellite.png" rounded />
        {/* </Container> */}
  
      </div>
    </Card>
    </Container>
  );
}


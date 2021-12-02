import { useAuth } from "../util/auth";
import { Button, Form, FormControl, Image } from "react-bootstrap";

// import Map from "../components/Map"; possible idea for reusing components


export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <>
    <div>
      {/* TODO: display logged in user's username */}
      <h1>Welcome to California Landmark Club {isLoggedIn ? user.username : "Guest"}!</h1>
      <hr />
      <h3>
      Have you ever wanted to see if others like to get out and explore as much as you do?  
      Well California landmarks club can help you with that.  
      Simply sign up to start today!
      </h3>

      <br/>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicSearch">
        <Form.Label>Search by location, city, or zipcode</Form.Label>
        <FormControl type="search" placeholder="Search" />
        {/* <Form.Text className="text-muted">Search by location, city, or zipcode</Form.Text> */}
        </Form.Group>
        

        <Button variant="primary" type="submit">Submit</Button>

      </Form>

    </div>

      {/* <Map/> possible idea reusing components refer to line 7*/}
<div className="d-flex justify-content-around homeMap">
{/* <Container> */}
      <Image style={{ width: '40rem', marginTop: '.5rem' }} src="https://www.howtogeek.com/wp-content/uploads/2021/01/google-maps-satellite.png" rounded />
{/* </Container> */}
  
</div>


  
  
  
 
  








</>


  );

 
}

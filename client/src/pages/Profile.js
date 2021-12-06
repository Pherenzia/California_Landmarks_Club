import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './Profile.css'
// import profilePic from '';

const badgeIcon = 
<img
src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/45/000000/external-badge-business-and-finance-icongeek26-linear-colour-icongeek26.png"
alt="badge"
className="img-fluid rounded-circle"
/>;

const tripTally = 25;
const tallyPic =  <img src="https://img.icons8.com/external-wanicon-flat-wanicon/32/000000/external-pin-location-wanicon-flat-wanicon.png"/>

// const landmarkPic = <img src="https://img.icons8.com/color/100/000000/national-park.png"/>

export default function Profile() {
	return (
		<Container >
			<Row className=" mycard headingborder">
            
                {/* Profile picture */}
                <Container>
                    
				<div>
				<section className="container-banner">
                    <img id="profilepic" src="https://img.icons8.com/bubbles/170/000000/iron-man.png" alt="profilepic"/>
                    
                </section>
				</div>
                <div className="badgewrapper">

				<Col className="badge mb-lg-5 mb-m-4 mb-3">
					{badgeIcon} {badgeIcon} {badgeIcon}
				</Col>
                </div>
					<h3 className="username">
					Tony
					</h3>
					<h3 className="bio">
                    My name is Tony and welcome to my page!    
					</h3>
               
                </Container>


				
			</Row>
            <Container className="tallyCard">
                <Row>
                <h3>Landmarks I've visited: {tripTally} {tallyPic}</h3>
                
                </Row>
            </Container>

            <Container className="mycard landmarkCard">
                <Row className="cardborder">
                    {/* <div className="landmarkPic">{landmarkPic}</div> */}
                    <div>
                     <img className="landmarkpic" src="https://s3-us-east-2.amazonaws.com/rvshare-wordpress/wp-content/uploads/2021/02/12115830/shutterstock_1079234993.jpg" width="400" alt="landmark"/>
                    </div>
                    <div className="description">
                    <h3 className="landmarkTitle">Balboa Park</h3>
                    <p className="landmarkDescription">was fun</p>
                    </div>
                </Row>
            </Container>

            <Container className="mycard landmarkCard">
                <Row className="cardborder">
                    {/* <div className="landmarkPic">{landmarkPic}</div> */}
                    <div>
                    <img className="landmarkpic"src="https://s3-us-east-2.amazonaws.com/rvshare-wordpress/wp-content/uploads/2021/02/12120656/shutterstock_114467512.jpg" width="400" alt="landmark"/>
                    </div>
                    <div className="description">
                    <h3 className="landmarkTitle">Hollywood Sign</h3>
                    <p className="landmarkDescription">was also fun</p>
                    </div>
                </Row>
            </Container>

            <Container className="mycard landmarkCard">
                <Row className="cardborder">
                    {/* <div className="landmarkPic">{landmarkPic}</div> */}
                    <div>
                    <img className="landmarkpic"src="https://s3-us-east-2.amazonaws.com/rvshare-wordpress/wp-content/uploads/2021/02/12162946/shutterstock_239675659.jpg" width="400" alt="landmark"/>
                    </div>
                    <div className="description">
                    <h3 className="landmarkTitle">Alcatraz Island</h3>
                    <p className="landmarkDescription">Spooky</p>
                    </div>
                </Row>
            </Container>
		</Container>
        
        
	);
}

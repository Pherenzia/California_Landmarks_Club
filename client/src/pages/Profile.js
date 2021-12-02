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

export default function Profile() {
	return (
		<Container className="customborder">
			<Row>
            
                {/* Profile picture */}
				<div>
				<Col xs={8} sm={6} md={6} lg={3} className="center mx-auto mb-lg-5 mb-m-4 mb-3">
					<img
						src="https://img.icons8.com/bubbles/150/000000/iron-man.png"
						alt="Me"
						className="img-fluid roundedCircle"
					/>
                  
				</Col>
				</div>

				<Col className="badgetop text-right mb-lg-5 mb-m-4 mb-3">
					{badgeIcon} {badgeIcon} {badgeIcon}
				</Col>
                <Col className="badgebot text-right mb-lg-5 mb-m-4 mb-3">
					{badgeIcon} {badgeIcon} {badgeIcon}
				</Col>
                <div className="jumbotron jumbotron-fluid mb-0">
				<Col xs={12} sm={6} md={6} className="text-center my-auto" id="about">
					<p className="username">
					Name: User
					</p>
					<p className="bio">
                    About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.   
					</p>
				</Col>
				</div>
			</Row>
		</Container>
	);
}

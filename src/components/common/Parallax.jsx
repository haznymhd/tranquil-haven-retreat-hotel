import React from "react"
import { Container } from "react-bootstrap"

const Parallax = () => {
	return (
		<div className="parallax mb-5">
			<Container className="text-center px-5 py-5 justify-content-center">
				<div className="animated-texts bounceIn">
					<h1>
						Experience the Best Nature at <span className="hotel-color">TranQuil Haven</span>
					</h1>
					<h3>We offer the best services for all your needs.</h3>
				</div>
			</Container>
		</div>
	)
}

export default Parallax

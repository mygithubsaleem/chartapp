import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Navbar, Button, Container, Nav, Carousel, Form } from "react-bootstrap";

function NavBarChart() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body">
			<Form>
				{/* <Nav bar .Body> */}
				<div>
					<Navbar variant="dark" bg="dark" expand="sm">
						<Container>
							<Button variant="primary" onClick={handleShow}>
								Show Menu
							</Button>
							<Navbar.Brand href="/" style={{ color: "red" }}>
								Home Page
							</Navbar.Brand>
							<Navbar.Brand href="./lineChart" style={{ color: "red" }}>
								Line Chart
							</Navbar.Brand>
							<Navbar.Brand href="./areaChart" style={{ color: "red" }}>
								Area Chart
							</Navbar.Brand>
							<Navbar.Brand href="./barChart" style={{ color: "red" }}>
								Bar Chart
							</Navbar.Brand>
							<Navbar.Brand href="./piechart" style={{ color: "red" }}>
								Pie Chart
							</Navbar.Brand>
							<Navbar.Brand href="./donutChart" style={{ color: "red" }}>
								Donut Chart
							</Navbar.Brand>
						</Container>
					</Navbar>
				</div>
				{/* <offcanvas Body> */}

				<>
					<Container>
						<Offcanvas show={show} onHide={handleClose}>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title></Offcanvas.Title>
							</Offcanvas.Header>

							<div className="sidebar">
								<Link to="/lineChart">
									<Button className="block" type="button">
										Line Chart{" "}
									</Button>
								</Link>
								<br />

								<Link to="/barChart">
									<Button className="block" type="button">
										Bar Chart{" "}
									</Button>
								</Link>
								<br />

								<Link to="/areaChart">
									<Button className="block" type="button">
										Area Chart{" "}
									</Button>
								</Link>
								<br />

								<Link to="/pieChart">
									<Button className="block" type="button">
										Pie Chart
									</Button>
								</Link>
							</div>
						</Offcanvas>
					</Container>
				</>
			</Form>
		</div>
	);
}

export default NavBarChart;

import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Navbar, Container, Button, Col, Row } from "react-bootstrap";
import chartlogo from "./Images/logo2.png";
import chartstyle from "./chart.module.css";

const Home = (prosp) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div style={{ backgroundColor: "skyblue" }}>
			<h5>
				<img src={chartlogo} />
				SHIFT SOLUTION: Charts App{" "}
			</h5>
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Button variant="primary" onClick={handleShow}>
							Menu
						</Button>

						<Navbar.Brand href="./">Home</Navbar.Brand>
						<Navbar.Brand href="./ChartLine">Line Chart</Navbar.Brand>
						<Navbar.Brand href="./ChartBar">Bar Chart</Navbar.Brand>
						<Navbar.Brand href="./ChartPie">Pie Chart</Navbar.Brand>
						<Navbar.Brand href="./ChartDonut">Donut Chart</Navbar.Brand>
						<Navbar.Brand href="./ChartArea">Area Chart</Navbar.Brand>
					</Container>
				</Navbar>
			</>
			<br />
			{/* <h1>Select Your Chart By Clicking ...</h1>
			<Row>
				<Col>Line Chart</Col>
				<Col>Bar Chart</Col>
				<Col>Pie Chart</Col>
				<Col>Bar Chart</Col>
				<Col>Area Chart</Col>
			</Row>
			<Row>
				<Col>Line Pic</Col>
				<Col>Bar Pic</Col>
				<Col>Pie Pic</Col>
				<Col>Bar Pic</Col>
				<Col>Area Pic</Col>
			</Row> */}
			<>
				<Container>
					<Offcanvas className={chartstyle.offcansize} show={show} onHide={handleClose}>
						<Offcanvas.Header closeButton className={chartstyle.sidebarbutn}>
							<Offcanvas.Title></Offcanvas.Title>
						</Offcanvas.Header>

						<div className={chartstyle.sidebar}>
							<Link className={chartstyle.linkchart} to="/ChartLine">
								Line Chart{" "}
							</Link>
							<br />

							<Link className={chartstyle.linkchart} to="/ChartBar">
								Bar Chart
							</Link>
							<br />

							<Link className={chartstyle.linkchart} to="/ChartPie">
								Pie Chart{" "}
							</Link>
							<br />

							<Link className={chartstyle.linkchart} to="/ChartArea/">
								Area Chart
							</Link>
							<br />
							<Link className={chartstyle.linkchart} to="/ChartDonut">
								Donut Chart{" "}
							</Link>
							<br />
						</div>
					</Offcanvas>
				</Container>
			</>
		</div>
	);
};
export default Home;

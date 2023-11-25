import React from "react";
import tweet from "./ParotsImages/tweet.png";
import utube from "./ParotsImages/utube.png";
import whatsapp from "./ParotsImages/whatsapp.png";
import insta from "./ParotsImages/insta.png";
import facebook from "./ParotsImages/facebook.png";
import styles from "../ParotApp/Parrot.module.css";
import { Form, Col, Row } from "react-bootstrap";

const ChartFotter = () => {
	return (
		<div>
			<Form>
				<Row className="fotter-row mt-1">
					<div className="col-md-6">
						<Col className={styles.footerCol1}>
							<ul className={styles.fottertext}>
								<li>10/25 Swami Nagar Lahore 54900.</li>
								<li>Cell# : 03434810913</li>
								<li>What's App#: 03434810913</li>
							</ul>
						</Col>
					</div>
					<div className="col-md-6">
						<Col className={styles.footerCol2}>
							<div>
								<h6 className={styles.fottertext}>You can also follow us on...</h6>
								<img className={styles.fotterimage} src={utube} />
								<img className={styles.fotterimage} src={tweet} />
								<img className={styles.fotterimage} src={insta} />
								<img className={styles.fotterimage} src={whatsapp} />
								<img className={styles.fotterimage} src={facebook} />
							</div>
						</Col>
					</div>
				</Row>
			</Form>
		</div>
	);
};
export default ChartFotter;

import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ChartLine from "./ChartLine";
import ChartBar from "./ChartBar";
import ChartPie from "./ChartPie";
import ChartDonut from "./ChartDonut";
import ChartArea from "./ChartArea";

function App() {
	return (
		<>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="ChartLine" element={<ChartLine />} />
					<Route path="ChartBar" element={<ChartBar />} />
					<Route path="ChartPie" element={<ChartPie />} />
					<Route path="ChartArea" element={<ChartArea />} />
					<Route path="ChartDonut" element={<ChartDonut />} />
				</Routes>
			</div>
		</>
	);
}

export default App;

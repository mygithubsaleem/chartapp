import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie, PieChart, Cell, ResponsiveContainer, Legend, Tooltip, Line } from "recharts";
import Home from "./Home";

const ChartPie = () => {
	const [data, setData] = useState([
		{ name: "Group A", value: 800 },
		{ name: "Group B", value: 300 },
		{ name: "Group C", value: 300 },
		{ name: "Group D", value: 500 },
	]);
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	const RADIAN = Math.PI / 180;

	return (
		<div style={{ backgroundColor: "green" }}>
			<Home />
			<h1>Pie Chart</h1>
			<div style={{ width: "99%", height: 900 }}>
				<ResponsiveContainer width="100%" height="50%">
					<PieChart width={400} height={500}>
						<Pie
							data={data}
							// cx={50}
							// cy={50}
							labelLine={true}
							label
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
							nameKey="name"
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip contentStyle={{ backgroundColor: "yellow" }} />
						<Legend iconType="star" iconSize={75} />
						<Line dataKey="Students" stroke="red" activeDot={{ r: 18 }} />
						<Line dataKey="Fee" stroke="blue" activeDot={{ r: 18 }} />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
export default ChartPie;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("./Products");
	};

	return (
		<div>
			<h1>Home Page </h1>

			<button onClick={navigateHandler}>Navigate</button>
		</div>
	);
};

export default Home;

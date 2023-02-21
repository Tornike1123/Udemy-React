import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Home Page </h1>
			<p>
				Go to <Link to="/products"> the list of home</Link>
			</p>
		</div>
	);
};

export default Home;

// React Functional Component
import React from "react";
import './HomeGen.css';

import HomeGenHome from "../../item/HomeGenHome";

// ------------------------------ HomeGen ------------------------------ 

const HomeGen = () => {
	return (
		<div className="homeGen container home-full">
			<div className="homeGenTitle hero-section">
				<h3>Minimized Genshin Info Guide</h3>
			</div>
			<div className="homeGenWrapper two-wrapper">
				<HomeGenHome />
				<HomeGenHome />
				<HomeGenHome />
				<HomeGenHome />
			</div>
		</div>
	)
}

export default HomeGen

// React Functional Component
import React from "react";
import './HomeGen.css';

import { Link } from 'react-router-dom'

import HomeGenHome from "../../item/HomeGenHome";

import yutuberBangDB from '../../../services/moduled/game'

// ------------------------------ HomeGen ------------------------------ 

const HomeGen = () => {
	const [database, setDatabase] = React.useState(yutuberBangDB)
	// console.log(database) 
	return (
		<div className="homeGen container home-steady">
			<div className="homeGenTitle fluid-section">
				<h2>Minimized<br/>Info Guide</h2>
			</div>
			<div className="homeGen__wrapper">
				{database.map((item) => 
					<Link 
						key={`homeGen-${item.id}`}
						to={`/game/${`homeGen-${item.id}`}`}
					>
						<HomeGenHome 
							homePic={item.logo}
							// homeText={item.name}
						/>
					</Link>
				)}
			</div>
		</div>
	)
}

export default HomeGen

					// <div className="homeGenNewItem" key={`aboutItem ${item.id}`}>
						
					// </div>
// React Functional Component
import React from "react";
import './HomeGenHome.css'

// ------------------------------ HomeGenHome ------------------------------ 

const HomeGenHome = ({homePic, homeText}) => {
	return (
			<div className="homeGenHome">
				<div className="homeGenHomeUpper">
							<img className="img" src={homePic}/>
				</div>
				<div className="homeGenHomeDowner">
					<h3>{homeText}</h3>
				</div>
			</div>
	)
}

				// <div className="homeGenHomeItemImgWrapper itemImgWrapper">
				// </div>
export default HomeGenHome

					
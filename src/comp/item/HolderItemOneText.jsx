// React Functional Component
import React from "react";
import './HolderItemOneText.css'

// ------------------------------ HolderItemOneText ------------------------------ 

const HolderItemOneText = ({value}) => {
	return (
		<div className="holderItemOneText">
			<div className="charMidMaterialHistory">
				<p>{value.text}</p>
			</div>
			<div className="line__tag line__margintwo"></div>
		</div>
	)
}

export default HolderItemOneText

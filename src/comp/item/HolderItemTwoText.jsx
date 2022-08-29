// React Functional Component
import React from "react";
import './HolderItemTwoText.css'

// ------------------------------ HolderItemTwoText ------------------------------ 

const HolderItemTwoText = ({value}) => {
	return (
		<div className="holderItemTwoText">

			<div className="holderItemTwoTextTitle">
				<h3>{value && value.twoText.title}</h3>
			</div>

			{value && value.twoText.lists.map((item) =>
				<div className="holderItemTwoTextItem" key={`twoText-${item.listId}`}> 
					<div className="holderItemTwoTextTop">
						<h2>{item.listKey}</h2>
					</div>
					<div className="holderItemTwoTextDown">
						<h3>{item.listValue}</h3>
					</div>
				</div>
			)}

			<div className="line__tag line__margintwo"></div>		
		</div>
	)
}

export default HolderItemTwoText

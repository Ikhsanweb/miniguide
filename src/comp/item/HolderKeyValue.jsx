// React Functional Component
import React from "react";
import './HolderKeyValue.css'

// ------------------------------ HolderKeyValue ------------------------------ 

const HolderKeyValue = ({value}) => {
	return (
		<div className="holderKeyValue">
			<div className="charMidBiodata">

				{value && value.keyValue.lists.map((item) => 
					<div className="charMidBiodataList" key={item.listId}>
						<div className="charMidBiodataListText">
							<h4>{item.listKey}</h4>
						</div>
						<div className="charMidBiodataListDot">
							<h4>:</h4>
						</div>
						<div className="charMidBiodataListValue">
							<h4>{item.listValue}</h4>
						</div>
					</div>
				)}

			</div>	
			<div className="line__tag line__margintwo"></div>	
		</div>
	)
}

export default HolderKeyValue

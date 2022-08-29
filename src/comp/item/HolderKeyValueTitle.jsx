// React Functional Component
import React from "react";
import './HolderKeyValueTitle.css'

// ------------------------------ HolderKeyValueTitle ------------------------------ 

const HolderKeyValueTitle = ({value}) => {
	return (
		<div className="holderKeyValueTitle">
			<div className="charMidBiodata">

				<div className="holderKeyValueTitleNext">
					<h3>{value.keyValueTitle.title}</h3>
				</div>

				{value && value.keyValueTitle.lists.map((item) => 
					<div className="charMidBiodataList" key={item.listId}>
						<div className="charMidBiodataListText__title">
							<h4>{item.listKey}</h4>
						</div>
						<div className="charMidBiodataListDot__title">

						</div>
						<div className="charMidBiodataListValue__title">
							<h4>{item.listValue}</h4>
						</div>
					</div>
				)}

			</div>	
			<div className="line__tag line__margintwo"></div>
		</div>
	)
}

export default HolderKeyValueTitle

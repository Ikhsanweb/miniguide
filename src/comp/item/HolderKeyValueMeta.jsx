// React Functional Component
import React from "react";
import './HolderKeyValueMeta.css'

// ------------------------------ HolderKeyValueMeta ------------------------------ 

const HolderKeyValueMeta = ({value}) => {
	return (
		<div className="">
			<div className="charMidBiodata">

				{value && value.meta.map((item) => 
					<div className="charMidBiodataList" key={item.metaId}>
						<div className="charMidBiodataListText">
							<h4>{item.metaName}</h4>
						</div>
						<div className="charMidBiodataListDot">
							<h4>:</h4>
						</div>
						<div className="charMidBiodataListValue">
							<h4>{item.metaValue}</h4>
						</div>
					</div>
				)}

			</div>	
			<div className="line__tag line__margintwo"></div>		
		</div>
	)
}

export default HolderKeyValueMeta

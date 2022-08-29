// React Functional Component
import React from "react";
import './HolderTofWeapon.css'

// ------------------------------ HolderTofWeapon ------------------------------ 

const HolderTofWeapon = ({value}) => {
	return (
		<div className="holderTofWeapon">
			<div className="charMidMaterialLevelValueItem">
				<div className="charMidMaterialLevelValueItemPic">
					<img className="img" src={value.weaponImg} />
				</div>
				<div className="charMidMaterialLevelValueItemValue">
					<p>{value.weaponName}</p>
				</div>
			</div>
		</div>
	)
}

export default HolderTofWeapon

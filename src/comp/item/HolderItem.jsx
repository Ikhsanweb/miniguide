// React Functional Component
import React from "react";
import './HolderItem.css'

import HolderKeyValueMeta from './HolderKeyValueMeta'
import HolderKeyValueTitle from './HolderKeyValueTitle'
import HolderKeyValue from './HolderKeyValue'
import HolderItemOneText from './HolderItemOneText'
import HolderItemTwoText from './HolderItemTwoText'
import HolderMaterial from './HolderMaterial'
import HolderRec from './HolderRec'
import HolderArtTypes from './HolderArtTypes'
import HolderTofWeapon from './HolderTofWeapon'

// ------------------------------ HolderItem ------------------------------ 

const HolderItem = ({model, metadata}) => {

	const renderItem = (model, metadata) => {
		if(model == "KeyValueMeta") {
			return <HolderKeyValueMeta value={metadata}/>
		} else if (model == "KeyValueTitle") {
			return <HolderKeyValueTitle value={metadata} />
		} else if (model == "KeyValue") {
			return <HolderKeyValue value={metadata} />
		} else if (model == "OneText") {
			return <HolderItemOneText value={metadata} />
		} else if (model == "Material") {
			return <HolderMaterial value={metadata} />
		} else if (model == "Rec") {
			return <HolderRec value={metadata} />
		} else if (model == "TwoText") {
			return <HolderItemTwoText value={metadata} />
		} else if (model == "ArtTypes") {
			return <HolderArtTypes value={metadata} />
		} else if (model == "TofWeapon") {
			return <HolderTofWeapon value={metadata} />
		} else {
			return console.log("No Where Where")
		}
		return null
	}

	return (
		<div className="holderItem">
			{renderItem(model, metadata)}
		</div>
	)
}

export default HolderItem

			// { (model == "KeyValueMeta") 
			// 	? <HolderKeyValueMeta value={metadata}/>
			// 	: (model == "OneText") 
			// 	? <HolderItemOneText value{metadata} />
			// 	: console.log("no Where")
			// }
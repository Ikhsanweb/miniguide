// React Functional Component
import React from "react";
import './HolderMaterial.css'

// ------------------------------ HolderMaterial ------------------------------ 

const HolderMaterial = ({value}) => {

	const wrapperFilter = (wrapperPoints) => {
		if (wrapperPoints === 1) {
			return `one-wrapper`
		} else if (wrapperPoints === 2) {
			return `two-wrapper`
		} else if (wrapperPoints === 3) {
			return `three-wrapper`
		} else if (wrapperPoints === 4) {
			return `four-wrapper`
		}
		return null
	}

	return (
		<div className="holderMaterial">
			<div className="charMidBiodata">
				<div className="holderMaterialTitle">
					<h3>{value.materialForLevelUp.title}</h3>
				</div>
				{value && value.materialForLevelUp.lists.map((item) => (
					<div className="holderMaterialItem" key={item.listId}>
						<div className="holderMaterialTop">
							<h3>{item.listName}</h3>
						</div>
						<div className={`holderMaterialDown ${wrapperFilter(item.listWrapper())}`}>
							{item.listContent.map((newItem) => (
								<div className="holderMaterialDownItem" key={newItem.listContentId}>
									<h4>{newItem.listContentAmount}</h4>
									<div className="holderMaterialImgCover">
										<img className="imgg" src={newItem.listContentImage} />
									</div>
									<h5>{newItem.listContentName}</h5>
								</div>
							))}
						</div>
					</div>
				))}

			</div>
		</div>
	)
}

export default HolderMaterial

// React Functional Component
import React from "react";
import './HolderArtTypes.css'

// ------------------------------ HolderArtTypes ------------------------------ 

const HolderArtTypes = ({value}) => {
	return (
		<div className="holderArtTypes">
			<div className="charMidBiodata">
				<div className="holderMaterialTitle">
					<h3>{value.artTypes.title}</h3>
				</div>
				{value && value.artTypes.lists.map((item) => (
					<div className="holderMaterialItem" key={item.listId}>
						<div className="holderMaterialTop">
							<h3>{item.listSlot}</h3>
						</div>
						<div className={`holderMaterialDown typesWrapper`}>
							
								<div className="holderMaterialDownItem">
									<div className="holderMaterialDownItemNext">
										<div className="holderMaterialImgCover">
											<img className="imgg" src={item.listImg} />
										</div>
									</div>
								</div>

								<div className="holderMaterialDownItem">
									<h3 className="holderMaterialDownItem__h3">{item.listName}</h3>
									<div className="holderMaterialDownItemNext">
										<h4>{item.listStats}</h4>
									</div>
								</div>
							
						</div>
					</div>
				))}

			</div>
		</div>
	)
}

export default HolderArtTypes

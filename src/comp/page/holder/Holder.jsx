// React Functional Component
import React from "react";
import './Holder.css'

import BaseLayout from '../../base/BaseLayout'

import { Link, useParams } from 'react-router-dom'
import HolderItem from "../../item/HolderItem";

import yutuberBangDB from '../../../services/moduled/game'

// ------------------------------ Holder ------------------------------ 

const Holder = () => {
	const [data, setData] = React.useState()
	const {gameId, itemId, contentId} = useParams()

	React.useEffect(() => {

		if(gameId === `homeGen-1`) {
			if(itemId === `gameGen-1`) {
				if(contentId === `listGen-1`) {
					setData(yutuberBangDB[0].constantItem[0].itemContents[0])
				} else if (contentId === `listGen-2`) {
					setData(yutuberBangDB[0].constantItem[0].itemContents[1])
				} else if (contentId === `listGen-3`) {
					setData(yutuberBangDB[0].constantItem[0].itemContents[2])
				} else {
					console.log('No where')
				}
			} else if(itemId === `gameGen-2`) {
				if(contentId === `listGen-1`) {
					setData(yutuberBangDB[0].constantItem[1].itemContents[0])
				} else if (contentId === `listGen-2`) {
					setData(yutuberBangDB[0].constantItem[1].itemContents[1])
				} else if (contentId === `listGen-3`) {
					setData(yutuberBangDB[0].constantItem[1].itemContents[2])
				} else {
					console.log('No where')
				}
			} else if(itemId === `gameGen-3`) {
				if(contentId === `listGen-1`) {
					setData(yutuberBangDB[0].constantItem[2].itemContents[0])
				} else if (contentId === `listGen-2`) {
					setData(yutuberBangDB[0].constantItem[2].itemContents[1])
				} else if (contentId === `listGen-3`) {
					setData(yutuberBangDB[0].constantItem[2].itemContents[2])
				} else {
					console.log('No where')
				}
			} else {
				console.log('No where')
			}
		} else if (gameId === `homeGen-2`) {
			if(itemId === `gameGen-1`) {
				if(contentId === `listGen-1`) {
					setData(yutuberBangDB[1].constantItem[0].itemContents[0])
				} else if (contentId === `listGen-2`) {
					setData(yutuberBangDB[1].constantItem[0].itemContents[1])
				} else if (contentId === `listGen-3`) {
					setData(yutuberBangDB[1].constantItem[0].itemContents[2])
				} else {
					console.log('No where')
				}
			} else if(itemId === `gameGen-2`) {
				if(contentId === `listGen-1`) {
					setData(yutuberBangDB[1].constantItem[1].itemContents[0])
				} else if (contentId === `listGen-2`) {
					setData(yutuberBangDB[1].constantItem[1].itemContents[1])
				} else if (contentId === `listGen-3`) {
					setData(yutuberBangDB[1].constantItem[1].itemContents[2])
				} else {
					console.log('No where')
				}
			} else {
				console.log('No where')
			}
		} else {
			console.log("Nothing here")
		}
	}, [])

	return (
		<BaseLayout>
			<div className="char">
				<div className="charUp">
					<div className="charUpPic">
						<img className="img" src={data && data.contentImg}/>
					</div>
					<div className="charUpTitle">
						<div className="charUpTitleName"><h3>{data && data.contentName}</h3></div>
					</div>
				</div>
				<div className="line__tag line__margintwo"></div>
				<div className="charMid">

					{data && data.contentFull.map((item) => 
						<HolderItem 
							key={item.fullId}
							model={item.model}
							metadata={item.metadata}
						/>
					)}

					{/*<div className="charMidMaterial">
						<div className="charMidMaterialLevel">
							<div className="charMidMaterialLevelTitle">
								<h4>Level up Material</h4>
							</div>
							<div className="charMidMaterialLevelValue four-wrapper">
								
								<div className="charMidMaterialLevelValueItem">
									<div className="charMidMaterialLevelValueItemPic">
										
									</div>
									<div className="charMidMaterialLevelValueItemValue">
										<p>Ini adalah layanan Dokter. Lorem ipsum dolor</p>
									</div>
								</div>

								<div className="charMidMaterialLevelValueItem">
									<div className="charMidMaterialLevelValueItemPic">
										
									</div>
									<div className="charMidMaterialLevelValueItemValue">
										<p>Ini adalah layanan Dokter. Lorem ipsum dolor</p>
									</div>
								</div>

								<div className="charMidMaterialLevelValueItem">
									<div className="charMidMaterialLevelValueItemPic">
										
									</div>
									<div className="charMidMaterialLevelValueItemValue">
										<p>Ini adalah layanan Dokter. Lorem ipsum dolor</p>
									</div>
								</div>

								<div className="charMidMaterialLevelValueItem">
									<div className="charMidMaterialLevelValueItemPic">
										
									</div>
									<div className="charMidMaterialLevelValueItemValue">
										<p>Ini adalah <br/>layanan Dokter. Lorem ipsum </p>
									</div>
								</div>
							</div>
						</div>
						<div className="charMidMaterialTAlent">
							
							<div className="charMidMaterialLevelTitle">
								<h4>Level up Material</h4>
							</div>
							<div className="charMidMaterialLevelValue four-wrapper">
								
								<div className="charMidMaterialLevelValueItem">
									<div className="charMidMaterialLevelValueItemPic">
										
									</div>
									<div className="charMidMaterialLevelValueItemValue">
										<p>Ini adalah layanan Dokter. Lorem ipsum dolor</p>
									</div>
								</div>

								<div className="charMidMaterialLevelValueItem">
									<div className="charMidMaterialLevelValueItemPic">
										
									</div>
									<div className="charMidMaterialLevelValueItemValue">
										<p>Ini adalah layanan Dokter. Lorem ipsum dolor</p>
									</div>
								</div>

							</div>

						</div>
					</div>
				</div>
				<div className="charDown">
					<div className="charDownSkill">
						<div className="charDownSkillItem">
							<h3>Skills</h3>
							<div className="charDownSkillItemItemValue">
								<h4>1. Normal Attack</h4>
								<p>Ini adalah layanan Dokter. Lorem ipsum dolor lorem Ini adalah layanan Dokter. Lorem ipsum dolor sit amet, constecture adipiscing elit. Curabitur tristique lorem eu consectetur facilisis. Donec non nisi scelerisque, lacina turpis vitae, maximus eros.</p>
							</div>
							<div className="charDownSkillItemItemValue">
								<h4>2. Cihayaburu</h4>
								<p>Ini adalah layanan Dokter. Lorem ipsum dolor lorem Ini adalah layanan Dokter. Lorem ipsum dolor sit amet, constecture adipiscing elit. Curabitur tristique lorem eu consectetur facilisis. Donec non nisi scelerisque, lacina turpis vitae, maximus eros.</p>
							</div>
						</div>
					</div>*/}
				</div>
			</div>
		</BaseLayout>
	)
}

export default Holder

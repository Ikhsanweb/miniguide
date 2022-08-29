// React Functional Component
import React from "react";
import './WholeList.css'

import BaseLayout from '../../base/BaseLayout'

import { Link, useParams } from 'react-router-dom'
import HomeGenHome from "../../item/HomeGenHome";

import yutuberBangDB from '../../../services/moduled/game'

// ------------------------------ WholeList ------------------------------ 

const WholeList = () => {

	const [data, setData] = React.useState()
	const {gameId, itemId} = useParams()

	React.useEffect(() => {
		if(gameId === `homeGen-1`) {
			if(itemId === `gameGen-1`) {
				setData(yutuberBangDB[0].constantItem[0])
			} else if(itemId === `gameGen-2`) {
				setData(yutuberBangDB[0].constantItem[1])
			} else if(itemId === `gameGen-3`) {
				setData(yutuberBangDB[0].constantItem[2])
			} else {
				console.log('No where')
			}
		} else if (gameId === `homeGen-2`) {
			if(itemId === `gameGen-1`) {
				setData(yutuberBangDB[1].constantItem[0])
			} else if(itemId === `gameGen-2`) {
				setData(yutuberBangDB[1].constantItem[1])
			} else {
				console.log('No where')
			}
		} else {
			console.log("Nothing here")
		}
	}, [])

	return (
		<BaseLayout>
			<div className="wholeList home-steady">
				<div className="fluid-section">
					<h2 className="headTitle">{data && data.itemName}<br/>List</h2>
					{/*<div className="gameLogo">
						<img className="img" src={data && data.logo} />
					</div>*/}
					{/*<h2>{data && data.name}</h2>*/}
				</div>
				<div className="wholeList-wrapper">
					{data && data.itemContents.map((item) => 
						<Link 
							key={`listGen-${item.contentId}`}
							to={`/game/${gameId}/wholeList/${itemId}/content/${`listGen-${item.contentId}`}`}
						>
							<HomeGenHome 
								homePic={item.contentImg}
								homeText={item.contentName}
							/>
						</Link>
					)}
				</div>
			</div>
		</BaseLayout>
	)
}

export default WholeList

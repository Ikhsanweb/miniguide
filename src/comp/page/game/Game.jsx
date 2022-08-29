// React Functional Component
import React from "react";
import './Game.css'

import BaseLayout from '../../base/BaseLayout'

import { Link, useParams } from 'react-router-dom'
// import HomeGenHome from "../../item/HomeGenHome";

import yutuberBangDB from '../../../services/moduled/game'

// ------------------------------ Game ------------------------------ 

const Game = () => {
	const [data, setData] = React.useState()
	const {gameId} = useParams()

	React.useEffect(() => {
		if(gameId === `homeGen-1`) {
			setData(yutuberBangDB[0])
		} else if (gameId === `homeGen-2`) {
			setData(yutuberBangDB[1])
		} else {
			console.log("Nothing here")
		}
	}, [gameId])

	return (
		<BaseLayout>
			<div className="game">
				<div className="fluid-section">
					{/*<h2>Minimized<br/>Info Guide</h2>*/}
					<div className="gameLogo">
						<img alt={`game`} className="img" src={data && data.logo} />
					</div>
					{/*<h2>{data && data.name}</h2>*/}
				</div>
				<div className="game-wrapper">
					{data && data.constantItem.map((item) => 
						<Link 
							key={`gameGen-${item.itemId}`}
							to={`/game/${gameId}/wholeList/${`gameGen-${item.itemId}`}`}
						>
							<div className="gameNext">
								<h4>{item.itemName}</h4>
							</div>
						</Link>
					)}
				</div>
			</div>
		</BaseLayout>
	)
}

export default Game

						// homePic={item.logo}
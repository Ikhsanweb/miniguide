// React Functional Component
import React from "react";
import './Char.css'

import BaseLayout from '../../base/BaseLayout'

// ------------------------------ Char ------------------------------ 

const Char = () => {

	// const myInit = {
	// 	method: 'GET',
	// 	mode: 'cors',
	// 	credentials: 'same-origin',
	// }

	// React.useEffect(() => {
	// 	fetch("https://impact.moe/api/characters/", myInit)
	// 		.then(res => console.log(res))
	// 		// .then(data => console.log(data))
	// 		// .then(res => console.log(res))
	// 		.catch(err => console.log(err))
	// 	// return () => {
	// 	// 	effect
	// 	// };
	// }, [])

	return (
		<BaseLayout>
			<div className="char">
				<div className="charUp">
					<div className="charUpPic">
						<div className="charUpPicCover"></div>
					</div>
					<div className="charUpTitle">
						<div className="charUpTitleName"><h3>Kaedehara Kazuha</h3></div>
					</div>
				</div>
				<div className="line__tag line__margintwo"></div>
				<div className="charMid">
					<div className="charMidBiodata">

						<div className="charMidBiodataList">
							<div className="charMidBiodataListText">
								<h4>Weapon type</h4>
							</div>
							<div className="charMidBiodataListDot">
								<h4>:</h4>
							</div>
							<div className="charMidBiodataListValue">
								<h4>Sword</h4>
							</div>
						</div>

						<div className="charMidBiodataList">
							<div className="charMidBiodataListText">
								<h4>Element</h4>
							</div>
							<div className="charMidBiodataListDot">
								<h4>:</h4>
							</div>
							<div className="charMidBiodataListValue">
								<h4>Anemo</h4>
							</div>
						</div>

						<div className="charMidBiodataList">
							<div className="charMidBiodataListText">
								<h4>Origin</h4>
							</div>
							<div className="charMidBiodataListDot">
								<h4>:</h4>
							</div>
							<div className="charMidBiodataListValue">
								<h4>Inazuma</h4>
							</div>
						</div>

					</div>
					<div className="line__tag line__margintwo"></div>
					<div className="charMidMaterial">
						<div className="charMidMaterialHistory">
							<p>Ini adalah layanan Dokter. Lorem ipsum dolor sit amet, constecture adipiscing elit. Curabitur tristique lorem eu consectetur facilisis. Donec non nisi scelerisque, lacina turpis vitae, maximus eros.</p>
						</div>
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
					</div>
				</div>
			</div>
		</BaseLayout>
	)
}

export default Char

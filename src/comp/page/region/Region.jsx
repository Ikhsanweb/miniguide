// React Functional Component
import React from "react";
import './Region.css'

import BaseLayout from '../../base/BaseLayout'

// ------------------------------ Char ------------------------------ 

const Region = () => {
	return (
		<BaseLayout>
			<div className="region">
				<div className="regionUp">
					<div className="regionUpPic">
						<div className="regionUpPicCover"></div>
					</div>
					<div className="charUpTitle">
						<div className="charUpTitleName"><h3>Iron Sting</h3></div>
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
								<h4>Base Attack</h4>
							</div>
							<div className="charMidBiodataListDot">
								<h4>:</h4>
							</div>
							<div className="charMidBiodataListValue">
								<h4>280</h4>
							</div>
						</div>

						<div className="charMidBiodataList">
							<div className="charMidBiodataListText">
								<h4>Main Stats</h4>
							</div>
							<div className="charMidBiodataListDot">
								<h4>:</h4>
							</div>
							<div className="charMidBiodataListValue">
								<h4>Elemental Mastery</h4>
							</div>
						</div>

					</div>
					<div className="line__tag line__margintwo"></div>
					<div className="charMidMaterial">
						<div className="charMidMaterialHistory">
							<p>Ini adalah layanan Dokter. Lorem ipsum dolor sit amet, constecture adipiscing elit. Curabitur tristique lorem eu consectetur facilisis. Donec non nisi scelerisque, lacina turpis vitae, maximus eros.</p>
						</div>
						<div className="regionCharList">
							<div className="regionCharListTitle">
								<h3>Character from Inazuma</h3>
							</div>
							<div className="regionCharListItemWrapper two-wrapper">
								<div className="regionCharListItem">
									<div className="regionCharListItemPic"></div>
									<div className="regionCharListItemName">Kaedehara Kazuha</div>
								</div>
								<div className="regionCharListItem">
									<div className="regionCharListItemPic"></div>
									<div className="regionCharListItemName">Thoma</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<div className="charDown">
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
				</div>*/}
			</div>
		</BaseLayout>
	)
}

export default Region

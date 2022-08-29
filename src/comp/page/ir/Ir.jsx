// React Functional Component
import React from "react";
import './Ir.css'

import BaseLayout from '../../base/BaseLayout'

// ------------------------------ Ir ------------------------------ 

const Ir = () => {
	return (
		<BaseLayout className="ir">
			<div className="ir__up">
				<h2>Incidence Rate</h2>
			</div>
			<div className="ir__mid">
				<div className="ir__mid__calculator">
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
				</div>
			</div>
			<div className="ir__down">
				<p>Ini adalah layanan Dokter. Lorem ipsum dolor sit amet, constecture adipiscing elit. Curabitur tristique lorem eu consectetur facilisis. Donec non nisi scelerisque, lacina turpis vitae, maximus eros.</p>
			</div>
		</BaseLayout>
	)
}

export default Ir

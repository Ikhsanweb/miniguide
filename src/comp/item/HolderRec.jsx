// React Functional Component
import React from "react";
import './HolderRec.css'

import HomeGenHome from "./HomeGenHome";

// ------------------------------ HolderRec ------------------------------ 

const HolderRec = ({value}) => {
	return (
		<div className="holderRec">
			<div className="holderRecTop">
				<h3>{value && value.weaponRecomendation.title}<br/>Recommendation</h3>
			</div>
			<div className="holderRec-wrapper">
				{value && value.weaponRecomendation.lists.map((item) => 
						<HomeGenHome 
							key={`weapon-${item.listId}`}
							homePic={item.listImg}
							homeText={item.listName}
						/>
				)}
			</div>
			<div className="line__tag line__margintwo"></div>	
		</div>
	)
}

export default HolderRec

					// <Link 
					// 	key={`weapon-${item.weapRId}`}
					// 	to={`/game/${gameId}/wholeList/${itemId}/content/${`listGen-${item.contentId}`}`}
					// >
					// </Link>




						// contentFull: [
						// 	{
						// 		fullId: 1,
						// 		model: "KeyValueMeta",
						// 		metadata: {
						// 			meta: [
						// 				{
						// 					metaId: 1,
						// 					metaName: tierType.title,
						// 					metaValue: tierType.aTier,
						// 				},
						// 			],
						// 		},
						// 	},
						// 	{
						// 		fullId: 2,
						// 		model: "KeyValue",
						// 		metadata: {
						// 			keyValue: {
						// 				title: biodataList.biodataTitle,
						// 				lists: [
						// 					{
						// 						listId: 1,
						// 						listKey: biodataList.weapon,
						// 						listValue: weaponType.sword,
						// 					},
						// 				],
						// 			},
						// 		},
						// 	},
						// 	{
						// 		fullId: 3,
						// 		model: "OneText",
						// 		metadata: {
						// 			text: "The young but highly acomplished head of the Yashiro Commision's Kamisato Clan. Cultured and polite, he is a man of many ways and means",
						// 		},
						// 	},
						// 	{
						// 		fullId: 4,
						// 		model: "Rec",
						// 		metadata: {
						// 			weaponRecomendation: {
						// 				title: biodataList.weaponTitle,
						// 				lists: [
						// 					{
						// 						listId: 1,
						// 						listName: weaponList.sword.haranGeppakuFutsu.name,
						// 						listImg: weaponList.sword.haranGeppakuFutsu.img, 
						// 					},
						// 				],
						// 			},
						// 		},
						// 	},
						// 	{
						// 		fullId: 5,
						// 		model: "Material",
						// 		metadata: {
						// 			materialForLevelUp: {
						// 				title: biodataList.materialLTitle,
						// 				lists: [
						// 					{
						// 						listId: 1,
						// 						listName: levelList.phaseOne,
						// 						listWrapper: function(){
						// 							return this.listContent.length;
						// 						},
						// 						listContent: [
						// 							{
						// 								listContentId: 1,
						// 								listContentName: material.nature.sakuraBloom.name,
						// 								listContentImage: material.nature.sakuraBloom.img,
						// 								listContentAmount: material.amountOf.amountOfNatureItem.phaseOne,
						// 							},
						// 						],
						// 					},
						// 				],
						// 			},
						// 		},
						// 	},
						// ],


						// contentFull: [
						// 	{
						// 		fullId: 1,
						// 		model: "TofWeapon",
						// 		metadata: {
						// 			weaponName: tofSimulacra.king.weaponName,
						// 			weaponImg: image.scytheOfTheCrow,
						// 		},
						// 	},
						// 	{
						// 		fullId: 2,
						// 		model: "KeyValueMeta",
						// 		metadata: {
						// 			meta: [
						// 				{
						// 					metaId: 1,
						// 					metaName: tofModus.grade.title,
						// 					metaValue: tofModus.grade.ssr,
						// 				},
						// 				{
						// 					metaId: 2,
						// 					metaName: tofModus.typetitle,
						// 					metaValue: tofModus.type,
						// 				},
						// 			],
						// 		},
						// 	},
						// 	{
						// 		fullId: 3,
						// 		model: "KeyValue",
						// 		metadata: {
						// 			keyValue: [
						// 				{
						// 					listId: 1,
						// 					listKey: tofHead.resonance,
						// 					listValue: tofModus.resonance.dps,
						// 				},
						// 				{
						// 					listId: 2,
						// 					listKey: tofHead.element,
						// 					listValue: tofModus.element.flame,
						// 				},
						// 				{
						// 					listId: 3,
						// 					listKey: tofHead.shatter,
						// 					listValue: parseFloat("12.5").toFixed(2),
						// 				},
						// 				{
						// 					listId: 3,
						// 					listKey: tofHead.charge,
						// 					listValue: parseFloat("5").toFixed(2),
						// 				},
						// 			],
						// 		},
						// 	},
						// 	{
						// 		fullId: 4,
						// 		model: "TwoText",
						// 		metadata: {
						// 			twoText: {
						// 				title: tofHead.weaponEffect,
						// 				lists: [
						// 					{
						// 						listId: 1,
						// 						listKey: tofModus.element.flame,
						// 						listValue: "Fully charged Weapons will set the target on fire for 8 seconds with the next attack, causing ongoing damage of 58.00% of ATK every second. Ignited targets receive 50% eficacy from healing.",
						// 					},
						// 				],
						// 			},
						// 		},
						// 	},
						// 	{
						// 		fullId: 5,
						// 		model: "KeyValueTitle",
						// 		metadata: {
						// 			keyValueTitle: {
						// 				title: tofHead.advancement,
						// 				lists: [
						// 					{
						// 						listId: 1,
						// 						listKey: tofModus.stars.one,
						// 						listValue: "Increase shatter by 15%. After shattering the target's shield, deal burn damage equal to 120% of ATK ti the target every second for 15 seconds.",
						// 					},
						// 					{
						// 						listId: 2,
						// 						listKey: tofModus.stars.two,
						// 						listValue: "Increase the current weapon's base HP growth by 16%.",
						// 					},
						// 					{
						// 						listId: 3,
						// 						listKey: tofModus.stars.three,
						// 						listValue: "Increase damage dealt by 10% for each enemy within 6 meters, up to maximum 30%.",
						// 					},
						// 					{
						// 						listId: 4,
						// 						listKey: tofModus.stars.four,
						// 						listValue: "Increase the current weapon`s base ATK growth by 32%.",
						// 					},
						// 					{
						// 						listId: 5,
						// 						listKey: tofModus.stars.five,
						// 						listValue: "Increase damage dealt againts HP shields or shielded enemies by 100%.",
						// 					},
						// 					{
						// 						listId: 6,
						// 						listStars: tofModus.stars.six,
						// 						listEffect: "Increase damage dealt by 10% for each enemy slain for 30 seconds. Stack up to 3 times.",
						// 					},
						// 				],
						// 			},
						// 		},
						// 	},
						// 	{
						// 		fullId: 6,
						// 		model: "KeyValueTitle",
						// 		metadata: {
						// 			keyValueTitle: {
						// 				title: tofHead.awakeningTraits,
						// 				lists: [
						// 					{
						// 						listId: 1,
						// 						listKey: tofModus.awakeningTraits.phaseOne,
						// 						listValue: "Every 7 enemies killed by KING restores HP equall to 8% of Max HP.",
						// 					},
						// 					{
						// 						listId: 2,
						// 						listKey: tofModus.awakeningTraits.phaseTwo,
						// 						listValue: "Every 5 enemies killed by KING restores HP equall to 10% of Max HP.",
						// 					},
						// 				],
						// 			},
						// 		},
						// 	},
						// ],
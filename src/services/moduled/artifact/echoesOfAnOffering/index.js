import { list, type } from "../../main";

const echoesOfAnOffering = {
  contentId: 3,
	contentName: list.artifactList.echoesOfAnOffering.sets.name,
	contentImg: list.artifactList.echoesOfAnOffering.flower.img,
	contentFull: [
		{
			fullId: 1,
			model: "KeyValueMeta",
			metadata: {
				meta: [
					{
						metaId: 1,
						metaName: type.tier.title,
						metaValue: type.tier.sTier,
					},
					{
						metaId: 2,
						metaName: type.rarity.title,
						metaValue: `${type.rarity.fiveStar}/${type.rarity.fourStar}`,
					},
					{
						metaId: 3,
						metaName: type.keyValueName.location,
						metaValue: "The Lost Valley",
					},
				],
			},
		},
		{
			fullId: 2,
			model: "TwoText",
			metadata: {
				twoText: {
					title: type.keyValueName.setBonus.name,
					lists: [
						{
							listId: 1,
							listKey: type.keyValueName.setBonus.twoSets,
							listValue: "ATK +15%.",
						},
						{
							listId: 2,
							listKey: type.keyValueName.setBonus.fourSets,
							listValue: "When Normal Attack hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If Normal Attck fails to trigger Valley RIte, the odds of it triggering the next time will increase by 20%. this trigger can occur once every 0.02s.",
						},
					],
				},
			},
		},
		{
			fullId: 3,
			model: "ArtTypes",
			metadata: {
				artTypes: {
					title: type.artifactTypes.name,
					lists: [
						{
							listId: 1,
							listSlot: type.artifactTypes.flowerOfLife.name,
							listName: list.artifactList.echoesOfAnOffering.flower.name,
							listImg: list.artifactList.echoesOfAnOffering.flower.img,
							listStats: type.artifactTypes.flowerOfLife.stats,
						},
						{
							listId: 2,
							listSlot: type.artifactTypes.plumeOfDeath.name,
							listName: list.artifactList.echoesOfAnOffering.feather.name,
							listImg: list.artifactList.echoesOfAnOffering.feather.img,
							listStats: type.artifactTypes.plumeOfDeath.stats,
						},
						{
							listId: 3,
							listSlot: type.artifactTypes.sandsOfEon.name,
							listName: list.artifactList.echoesOfAnOffering.sand.name,
							listImg: list.artifactList.echoesOfAnOffering.sand.img,
							listStats: type.artifactTypes.sandsOfEon.stats,
						},
						{
							listId: 4,
							listSlot: type.artifactTypes.gobletOfEonothem.name,
							listName: list.artifactList.echoesOfAnOffering.goblet.name,
							listImg: list.artifactList.echoesOfAnOffering.goblet.img,
							listStats: type.artifactTypes.gobletOfEonothem.stats,
						},
						{
							listId: 5,
							listSlot: type.artifactTypes.circletOfLogos.name,
							listName: list.artifactList.echoesOfAnOffering.crown.name,
							listImg: list.artifactList.echoesOfAnOffering.crown.img,
							listStats: type.artifactTypes.circletOfLogos.stats,
						},
					],
				},
			},
		},
	],
}

export default echoesOfAnOffering;
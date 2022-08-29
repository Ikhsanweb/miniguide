import { list, type } from "../../main";

const crimsonWitchOfFlame = {
  contentId: 2,
	contentName: list.artifactList.crimsonWitchOfFlame.sets.name,
	contentImg: list.artifactList.crimsonWitchOfFlame.flower.img,
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
						metaValue: "Hidden Palace of Zhou Formula",
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
							listValue: "Pyro DMG Bonus +15%.",
						},
						{
							listId: 2,
							listKey: type.keyValueName.setBonus.fourSets,
							listValue: "Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using and Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting Value for 10s, Max 3 stacks.",
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
							listName: list.artifactList.crimsonWitchOfFlame.flower.name,
							listImg: list.artifactList.crimsonWitchOfFlame.flower.img,
							listStats: type.artifactTypes.flowerOfLife.stats,
						},
						{
							listId: 2,
							listSlot: type.artifactTypes.plumeOfDeath.name,
							listName: list.artifactList.crimsonWitchOfFlame.feather.name,
							listImg: list.artifactList.crimsonWitchOfFlame.feather.img,
							listStats: type.artifactTypes.plumeOfDeath.stats,
						},
						{
							listId: 3,
							listSlot: type.artifactTypes.sandsOfEon.name,
							listName: list.artifactList.crimsonWitchOfFlame.sand.name,
							listImg: list.artifactList.crimsonWitchOfFlame.sand.img,
							listStats: type.artifactTypes.sandsOfEon.stats,
						},
						{
							listId: 4,
							listSlot: type.artifactTypes.gobletOfEonothem.name,
							listName: list.artifactList.crimsonWitchOfFlame.goblet.name,
							listImg: list.artifactList.crimsonWitchOfFlame.goblet.img,
							listStats: type.artifactTypes.gobletOfEonothem.stats,
						},
						{
							listId: 5,
							listSlot: type.artifactTypes.circletOfLogos.name,
							listName: list.artifactList.crimsonWitchOfFlame.crown.name,
							listImg: list.artifactList.crimsonWitchOfFlame.crown.img,
							listStats: type.artifactTypes.circletOfLogos.stats,
						},
					],
				},
			},
		},
	],
}

export default crimsonWitchOfFlame;
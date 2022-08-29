import { list, type } from "../../main";

const heartOfDepth = {
  contentId: 1,
  contentName: list.artifactList.heartOfDepth.sets.name,
  contentImg: list.artifactList.heartOfDepth.flower.img,
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
            metaValue: "Peak of Vindagnyr",
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
              listValue: "Hydro DMG Bonus +15%.",
            },
            {
              listId: 2,
              listKey: type.keyValueName.setBonus.fourSets,
              listValue: "After using an Elemental Skill, Increases Normal Attack and Charged Attack DMG by 30% for 15s.",
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
              listName: list.artifactList.heartOfDepth.flower.name,
              listImg: list.artifactList.heartOfDepth.flower.img,
              listStats: type.artifactTypes.flowerOfLife.stats,
            },
            {
              listId: 2,
              listSlot: type.artifactTypes.plumeOfDeath.name,
              listName: list.artifactList.heartOfDepth.feather.name,
              listImg: list.artifactList.heartOfDepth.feather.img,
              listStats: type.artifactTypes.plumeOfDeath.stats,
            },
            {
              listId: 3,
              listSlot: type.artifactTypes.sandsOfEon.name,
              listName: list.artifactList.heartOfDepth.sand.name,
              listImg: list.artifactList.heartOfDepth.sand.img,
              listStats: type.artifactTypes.sandsOfEon.stats,
            },
            {
              listId: 4,
              listSlot: type.artifactTypes.gobletOfEonothem.name,
              listName: list.artifactList.heartOfDepth.goblet.name,
              listImg: list.artifactList.heartOfDepth.goblet.img,
              listStats: type.artifactTypes.gobletOfEonothem.stats,
            },
            {
              listId: 5,
              listSlot: type.artifactTypes.circletOfLogos.name,
              listName: list.artifactList.heartOfDepth.crown.name,
              listImg: list.artifactList.heartOfDepth.crown.img,
              listStats: type.artifactTypes.circletOfLogos.stats,
            },
          ],
        },
      },
    },
  ],
}

export default heartOfDepth;
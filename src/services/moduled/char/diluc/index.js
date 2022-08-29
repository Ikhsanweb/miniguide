import { list, type, material, amountOf } from "../../main";
import image from "../../image";

const diluc = {
  contentId: 2,
  contentName: 'Diluc',
  contentImg: image.diluc,
  contentFull: [
    {
      fullId: 1,
      model: "KeyValueMeta",
      metadata: {
        meta: [
          {
            metaId: 1,
            metaName: type.tier.title,
            metaValue: type.tier.aTier,
          },
          {
            metaId: 2,
            metaName: type.rarity.title,
            metaValue: type.rarity.fiveStar,
          },
        ],
      },
    },
    {
      fullId: 2,
      model: "KeyValue",
      metadata: {
        keyValue: {
          title: type.keyValueName.biodata,
          lists: [
            {
              listId: 1,
              listKey: type.keyValueName.weapon,
              listValue: type.weaponType.claymore,
            },
            {
              listId: 2,
              listKey: type.keyValueName.vision,
              listValue: type.vision.pyro,
            },
            {
              listId: 3,
              listKey: type.keyValueName.affiliation,
              listValue: type.affiliation.dawnWinery,
            },
            {
              listId: 4,
              listKey: type.keyValueName.constelation,
              listValue: 'Noctua',
            },
            {
              listId: 5,
              listKey: type.keyValueName.title,
              listValue: 'The Darknight Hero',
            },
          ],
        },
      },
    },
    {
      fullId: 3,
      model: "OneText",
      metadata: {
        text: "The tycoon of a winery empire in Mondstadt, unmatched in every possible way",
      },
    },
    {
      fullId: 4,
      model: "Rec",
      metadata: {
        weaponRecomendation: {
          title: type.keyValueName.weapon,
          lists: [
            {
              listId: 1,
              listName: list.weaponList.claymore.wolfsGravestone.name,
              listImg: list.weaponList.claymore.wolfsGravestone.img, 
            },
            {
              listId: 2,
              listName: list.weaponList.claymore.wolfsGravestone.name,
              listImg: list.weaponList.claymore.wolfsGravestone.img, 
            },
            {
              listId: 3,
              listName: list.weaponList.claymore.wolfsGravestone.name,
              listImg: list.weaponList.claymore.wolfsGravestone.img,
            },
            {
              listId: 4,
              listName: list.weaponList.claymore.wolfsGravestone.name,
              listImg: list.weaponList.claymore.wolfsGravestone.img,
            },
          ],
        },
      },
    },
    {
      fullId: 5,
      model: "Material",
      metadata: {
        materialForLevelUp: {
          title: type.keyValueName.materialForLevelUp,
          lists: [
            {
              listId: 1,
              listName: list.level.levelOne,
              listWrapper: function(){
                return this.listContent.length;
              },
              listContent: [
                {
                  listContentId: 1,
                  listContentName: material.nature.smallLampGrass.name,
                  listContentImage: material.nature.smallLampGrass.img,
                  listContentAmount: amountOf.natureItem.phaseOne,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.pyro.agnidusAgateSliver.name,
                  listContentImage: material.stone.pyro.agnidusAgateSliver.img,
                  listContentAmount: amountOf.stoneItem.sliver.phaseOne,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.insignia.recruits.name,
                  listContentImage: material.monsterDrop.insignia.recruits.img,
                  listContentAmount: amountOf.monsterDropItem.typeOne.phaseOne,
                },
              ],
            },
            {
              listId: 2,
              listName: list.level.levelTwo,
              listWrapper: function(){
                return this.listContent.length;
              },
              listContent: [
                {
                  listContentId: 1,
                  listContentName: material.nature.smallLampGrass.name,
                  listContentImage: material.nature.smallLampGrass.img,
                  listContentAmount: amountOf.natureItem.phaseTwo,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.pyro.agnidusAgateFragment.name,
                  listContentImage: material.stone.pyro.agnidusAgateFragment.img,
                  listContentAmount: amountOf.stoneItem.fragment.phaseTwo,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.insignia.recruits.name,
                  listContentImage: material.monsterDrop.insignia.recruits.img,
                  listContentAmount: amountOf.monsterDropItem.typeOne.phaseTwo,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.everflameSeed.name,
                  listContentImage: material.midBossDrop.everflameSeed.img,
                  listContentAmount: amountOf.midBossDropItem.phaseTwo,
                },
              ],
            },
            {
              listId: 3,
              listName: list.level.levelThree,
              listWrapper: function(){
                return this.listContent.length;
              },
              listContent: [
                {
                  listContentId: 1,
                  listContentName: material.nature.smallLampGrass.name,
                  listContentImage: material.nature.smallLampGrass.img,
                  listContentAmount: amountOf.natureItem.phaseThree,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.pyro.agnidusAgateFragment.name,
                  listContentImage: material.stone.pyro.agnidusAgateFragment.img,
                  listContentAmount: amountOf.stoneItem.fragment.phaseThree,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.insignia.sergeants.name,
                  listContentImage: material.monsterDrop.insignia.sergeants.img,
                  listContentAmount: amountOf.monsterDropItem.typeTwo.phaseThree,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.everflameSeed.name,
                  listContentImage: material.midBossDrop.everflameSeed.img,
                  listContentAmount: amountOf.midBossDropItem.phaseThree,
                },
              ],
            },
            {
              listId: 4,
              listName: list.level.levelFour,
              listWrapper: function(){
                return this.listContent.length;
              },
              listContent: [
                {
                  listContentId: 1,
                  listContentName: material.nature.smallLampGrass.name,
                  listContentImage: material.nature.smallLampGrass.img,
                  listContentAmount: amountOf.natureItem.phaseFour,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.pyro.agnidusAgateChunk.name,
                  listContentImage: material.stone.pyro.agnidusAgateChunk.img,
                  listContentAmount: amountOf.stoneItem.chunk.phaseFour,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.insignia.sergeants.name,
                  listContentImage: material.monsterDrop.insignia.sergeants.img,
                  listContentAmount: amountOf.monsterDropItem.typeTwo.phaseFour,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.everflameSeed.name,
                  listContentImage: material.midBossDrop.everflameSeed.img,
                  listContentAmount: amountOf.midBossDropItem.phaseFour,
                },
              ],
            },
            {
              listId: 5,
              listName: list.level.levelFive,
              listWrapper: function(){
                return this.listContent.length;
              },
              listContent: [
                {
                  listContentId: 1,
                  listContentName: material.nature.smallLampGrass.name,
                  listContentImage: material.nature.smallLampGrass.img,
                  listContentAmount: amountOf.natureItem.phaseFive,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.pyro.agnidusAgateChunk.name,
                  listContentImage: material.stone.pyro.agnidusAgateChunk.img,
                  listContentAmount: amountOf.stoneItem.chunk.phaseFive,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.insignia.lieutenants.name,
                  listContentImage: material.monsterDrop.insignia.lieutenants.img,
                  listContentAmount: amountOf.monsterDropItem.typeThree.phaseFive,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.everflameSeed.name,
                  listContentImage: material.midBossDrop.everflameSeed.img,
                  listContentAmount: amountOf.midBossDropItem.phaseFive,
                },
              ],
            },
            {
              listId: 6,
              listName: list.level.levelSix,
              listWrapper: function(){
                return this.listContent.length;
              },
              listContent: [
                {
                  listContentId: 1,
                  listContentName: material.nature.smallLampGrass.name,
                  listContentImage: material.nature.smallLampGrass.img,
                  listContentAmount: amountOf.natureItem.phaseSix,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.pyro.agnidusAgateGemstone.name,
                  listContentImage: material.stone.pyro.agnidusAgateGemstone.img,
                  listContentAmount: amountOf.stoneItem.gemstone.phaseSix,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.insignia.lieutenants.name,
                  listContentImage: material.monsterDrop.insignia.lieutenants.img,
                  listContentAmount: amountOf.monsterDropItem.typeThree.phaseSix,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.everflameSeed.name,
                  listContentImage: material.midBossDrop.everflameSeed.img,
                  listContentAmount: amountOf.midBossDropItem.phaseSix,
                },
              ],
            },
          ],
        },
      },
    },
  ],
}

export default diluc;
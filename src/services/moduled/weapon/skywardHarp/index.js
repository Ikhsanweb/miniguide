import { list, type, material, amountOf } from "../../main";

const skywardHarp = {
  contentId: 1,
  contentName: list.weaponList.bow.skywardHarp.name,
  contentImg: list.weaponList.bow.skywardHarp.img,
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
          title: type.keyValueName.weaponStats.title,
          lists: [
            {
              listId: 1,
              listKey: type.keyValueName.weaponStats.type,
              listValue: type.weaponType.bow,
            },
            {
              listId: 2,
              listKey: type.keyValueName.weaponStats.type.obtainBy,
              listValue: type.obtainBy.gacha,
            },
            {
              listId: 3,
              listKey: type.keyValueName.weaponStats.baseAttack,
              listValue: 45,
            },
            {
              listId: 4,
              listKey: type.keyValueName.weaponStats.substats,
              listValue: type.substats.critRate,
            },
            {
              listId: 5,
              listKey: type.keyValueName.weaponStats.passive,
              listValue: "Echoing Ballad",
            },
          ],
        },
      },
    },
    {
      fullId: 3,
      model: "OneText",
      metadata: {
        text: "A greatbow that symbolize Dvalin's affiliation with the Anemo Archon. The sound of the bow firing is music to the Anemo Archon's ears. it contains the power of the sky and wind within",
      },
    },
    {
      fullId: 4,
      model: "Material",
      metadata: {
        materialForLevelUp: {
          title: 'Material for Level Up',
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
                  listContentName: material.weaponMaterial.borealWolfs.milkTooth.name,
                  listContentImage: material.weaponMaterial.borealWolfs.milkTooth.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeOne.phaseOne,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.deadLeyLine.branch.name,
                  listContentImage: material.monsterDrop.deadLeyLine.branch.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeOne.phaseOne,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.arrowhead.firm.name,
                  listContentImage: material.monsterDrop.arrowhead.firm.img,
                  listContentAmount: amountOf.weaponMaterial.materialThree.typeOne.phaseOne,
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
                  listContentName: material.weaponMaterial.borealWolfs.crackedTooth.name,
                  listContentImage: material.weaponMaterial.borealWolfs.crackedTooth.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeTwo.phaseTwo,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.deadLeyLine.branch.name,
                  listContentImage: material.monsterDrop.deadLeyLine.branch.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeOne.phaseTwo,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.arrowhead.firm.name,
                  listContentImage: material.monsterDrop.arrowhead.firm.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeOne.phaseTwo,
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
                  listContentName: material.weaponMaterial.borealWolfs.crackedTooth.name,
                  listContentImage: material.weaponMaterial.borealWolfs.crackedTooth.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeTwo.phaseThree,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.deadLeyLine.leaves.name,
                  listContentImage: material.monsterDrop.deadLeyLine.leaves.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeTwo.phaseThree,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.arrowhead.sharp.name,
                  listContentImage: material.monsterDrop.arrowhead.sharp.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeTwo.phaseThree,
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
                  listContentName: material.weaponMaterial.borealWolfs.brokenFang.name,
                  listContentImage: material.weaponMaterial.borealWolfs.brokenFang.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeThree.phaseFour,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.deadLeyLine.leaves.name,
                  listContentImage: material.monsterDrop.deadLeyLine.leaves.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeTwo.phaseFour,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.arrowhead.sharp.name,
                  listContentImage: material.monsterDrop.arrowhead.sharp.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeTwo.phaseFour,
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
                  listContentName: material.weaponMaterial.borealWolfs.brokenFang.name,
                  listContentImage: material.weaponMaterial.borealWolfs.brokenFang.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeThree.phaseFive,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.deadLeyLine.sprouts.name,
                  listContentImage: material.monsterDrop.deadLeyLine.sprouts.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeThree.phaseFive,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.arrowhead.weathered.name,
                  listContentImage: material.monsterDrop.arrowhead.weathered.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeThree.phaseFive,
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
                  listContentName: material.weaponMaterial.borealWolfs.nostalgia.name,
                  listContentImage: material.weaponMaterial.borealWolfs.nostalgia.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeFour.phaseSix,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.deadLeyLine.sprouts.name,
                  listContentImage: material.monsterDrop.deadLeyLine.sprouts.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeThree.phaseSix,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.arrowhead.weathered.name,
                  listContentImage: material.monsterDrop.arrowhead.weathered.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeThree.phaseSix,
                },
              ],
            },
          ],
        },
      },
    },
  ],
}

export default skywardHarp;
import { list, type, material, amountOf } from "../../main";

const wolfsGravesone = {
  contentId: 2,
  contentName: list.weaponList.claymore.wolfsGravestone.name,
  contentImg: list.weaponList.claymore.wolfsGravestone.img,
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
          title: type.keyValueName.weaponStats.title,
          lists: [
            {
              listId: 1,
              listKey: type.keyValueName.weaponStats.type,
              listValue: type.weaponType.claymore,
            },
            {
              listId: 2,
              listKey: type.keyValueName.weaponStats.type.obtainBy,
              listValue: type.obtainBy.gacha,
            },
            {
              listId: 3,
              listKey: type.keyValueName.weaponStats.baseAttack,
              listValue: 46,
            },
            {
              listId: 4,
              listKey: type.keyValueName.weaponStats.substats,
              listValue: type.substats.attack,
            },
            {
              listId: 5,
              listKey: type.keyValueName.weaponStats.passive,
              listValue: "Wolfish Tracker",
            },
          ],
        },
      },
    },
    {
      fullId: 3,
      model: "OneText",
      metadata: {
        text: "A longsword used by the Wolf Knight. Originally just a heavy sheet of Iron given to the Knight by a blacksmith from the city, it became  endowed with legendary power owing to his friendship with the wolves",
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
                  listContentName: material.weaponMaterial.dandelionGladiator.fetters.name,
                  listContentImage: material.weaponMaterial.dandelionGladiator.fetters.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeOne.phaseOne,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.chaos.device.name,
                  listContentImage: material.monsterDrop.chaos.device.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeOne.phaseOne,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.scroll.divining.name,
                  listContentImage: material.monsterDrop.scroll.divining.img,
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
                  listContentName: material.weaponMaterial.dandelionGladiator.chains.name,
                  listContentImage: material.weaponMaterial.dandelionGladiator.chains.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeTwo.phaseTwo,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.chaos.device.name,
                  listContentImage: material.monsterDrop.chaos.device.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeOne.phaseTwo,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.scroll.divining.name,
                  listContentImage: material.monsterDrop.scroll.divining.img,
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
                  listContentName: material.weaponMaterial.dandelionGladiator.chains.name,
                  listContentImage: material.weaponMaterial.dandelionGladiator.chains.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeTwo.phaseThree,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.chaos.circuit.name,
                  listContentImage: material.monsterDrop.chaos.circuit.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeTwo.phaseThree,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.scroll.sealed.name,
                  listContentImage: material.monsterDrop.scroll.sealed.img,
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
                  listContentName: material.weaponMaterial.dandelionGladiator.shackles.name,
                  listContentImage: material.weaponMaterial.dandelionGladiator.shackles.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeThree.phaseFour,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.chaos.circuit.name,
                  listContentImage: material.monsterDrop.chaos.circuit.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeTwo.phaseFour,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.scroll.sealed.name,
                  listContentImage: material.monsterDrop.scroll.sealed.img,
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
                  listContentName: material.weaponMaterial.dandelionGladiator.shackles.name,
                  listContentImage: material.weaponMaterial.dandelionGladiator.shackles.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeThree.phaseFive,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.chaos.core.name,
                  listContentImage: material.monsterDrop.chaos.core.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeThree.phaseFive,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.scroll.forbiddenCurse.name,
                  listContentImage: material.monsterDrop.scroll.forbiddenCurse.img,
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
                  listContentName: material.weaponMaterial.dandelionGladiator.dream.name,
                  listContentImage: material.weaponMaterial.dandelionGladiator.dream.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeFour.phaseSix,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.chaos.core.name,
                  listContentImage: material.monsterDrop.chaos.core.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeThree.phaseSix,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.scroll.forbiddenCurse.name,
                  listContentImage: material.monsterDrop.scroll.forbiddenCurse.img,
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

export default wolfsGravesone
import { list, type, material, amountOf } from "../../main";

const haranGeppakuFutsu = {
  contentId: 3,
  contentName: list.weaponList.sword.haranGeppakuFutsu.name,
  contentImg: list.weaponList.sword.haranGeppakuFutsu.img,
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
              listValue: type.weaponType.sword,
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
              listValue: type.substats.critRate,
            },
            {
              listId: 5,
              listKey: type.keyValueName.weaponStats.passive,
              listValue: "Honed Flow",
            },
          ],
        },
      },
    },
    {
      fullId: 3,
      model: "OneText",
      metadata: {
        text: 'A famed work by the Futsu line of smiths. The name "Haran" comes from the manner in which it resembles the violent, rolling waves',
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
                  listContentName: material.weaponMaterial.narukamis.wisdom.name,
                  listContentImage: material.weaponMaterial.narukamis.wisdom.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeOne.phaseOne,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.statuette.gloomy.name,
                  listContentImage: material.monsterDrop.statuette.gloomy.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeOne.phaseOne,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.old.name,
                  listContentImage: material.monsterDrop.handguard.old.img,
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
                  listContentName: material.weaponMaterial.narukamis.joy.name,
                  listContentImage: material.weaponMaterial.narukamis.joy.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeTwo.phaseTwo,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.statuette.gloomy.name,
                  listContentImage: material.monsterDrop.statuette.gloomy.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeOne.phaseTwo,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.old.name,
                  listContentImage: material.monsterDrop.handguard.old.img,
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
                  listContentName: material.weaponMaterial.narukamis.joy.name,
                  listContentImage: material.weaponMaterial.narukamis.joy.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeTwo.phaseThree,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.statuette.dark.name,
                  listContentImage: material.monsterDrop.statuette.dark.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeTwo.phaseThree,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.kageuchi.name,
                  listContentImage: material.monsterDrop.handguard.kageuchi.img,
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
                  listContentName: material.weaponMaterial.narukamis.affection.name,
                  listContentImage: material.weaponMaterial.narukamis.affection.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeThree.phaseFour,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.statuette.dark.name,
                  listContentImage: material.monsterDrop.statuette.dark.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeTwo.phaseFour,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.kageuchi.name,
                  listContentImage: material.monsterDrop.handguard.kageuchi.img,
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
                  listContentName: material.weaponMaterial.narukamis.affection.name,
                  listContentImage: material.weaponMaterial.narukamis.affection.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeThree.phaseFive,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.statuette.deathly.name,
                  listContentImage: material.monsterDrop.statuette.deathly.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeThree.phaseFive,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.famed.name,
                  listContentImage: material.monsterDrop.handguard.famed.img,
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
                  listContentName: material.weaponMaterial.narukamis.valor.name,
                  listContentImage: material.weaponMaterial.narukamis.valor.img,
                  listContentAmount: amountOf.weaponMaterial.materialOne.typeFour.phaseSix,
                },
                {
                  listContentId: 2,
                  listContentName: material.monsterDrop.statuette.deathly.name,
                  listContentImage: material.monsterDrop.statuette.deathly.img,
                  listContentAmount: amountOf.weaponMaterial.materialTwo.typeThree.phaseSix,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.famed.name,
                  listContentImage: material.monsterDrop.handguard.famed.img,
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

export default haranGeppakuFutsu;
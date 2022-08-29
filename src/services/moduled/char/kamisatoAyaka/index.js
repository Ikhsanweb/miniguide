import { list, type, material, amountOf } from "../../main";
import image from "../../image";

const kamisatoAyato = {
  contentId: 3,
  contentName: 'Kamisato Ayato',
  contentImg: image.kamisatoAyato,
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
              listValue: type.weaponType.sword,
            },
            {
              listId: 2,
              listKey: type.keyValueName.vision,
              listValue: type.vision.hydro,
            },
            {
              listId: 3,
              listKey: type.keyValueName.affiliation,
              listValue: type.affiliation.theKamisatoClan,
            },
            {
              listId: 4,
              listKey: type.keyValueName.constelation,
              listValue: 'Cypressus Custos',
            },
            {
              listId: 5,
              listKey: type.keyValueName.title,
              listValue: 'Head of the Kamisato Clan',
            },
          ],
        },
      },
    },
    {
      fullId: 3,
      model: "OneText",
      metadata: {
        text: "The young but highly acomplished head of the Yashiro Commision's Kamisato Clan. Cultured and polite, he is a man of many ways and means",
      },
    },
    {
      fullId: 4,
      model: "Rec",
      metadata: {
        weaponRecomendation: {
          title: type.keyValueName.weaponTitle,
          lists: [
            {
              listId: 1,
              listName: list.weaponList.sword.haranGeppakuFutsu.name,
              listImg: list.weaponList.sword.haranGeppakuFutsu.img, 
            },
            {
              listId: 2,
              listName: list.weaponList.sword.haranGeppakuFutsu.name,
              listImg: list.weaponList.sword.haranGeppakuFutsu.img, 
            },
            {
              listId: 3,
              listName: list.weaponList.sword.haranGeppakuFutsu.name,
              listImg: list.weaponList.sword.haranGeppakuFutsu.img,
            },
            {
              listId: 4,
              listName: list.weaponList.sword.haranGeppakuFutsu.name,
              listImg: list.weaponList.sword.haranGeppakuFutsu.img,
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
          title: type.keyValueName.materialLTitle,
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
                  listContentName: material.nature.sakuraBloom.name,
                  listContentImage: material.nature.sakuraBloom.img,
                  listContentAmount: amountOf.natureItem.phaseOne,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.hydro.varunadaLazuriteSliver.name,
                  listContentImage: material.stone.hydro.varunadaLazuriteSliver.img,
                  listContentAmount: amountOf.stoneItem.sliver.phaseOne,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.old.name,
                  listContentImage: material.monsterDrop.handguard.old.img,
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
                  listContentName: material.nature.sakuraBloom.name,
                  listContentImage: material.nature.sakuraBloom.img,
                  listContentAmount: amountOf.natureItem.phaseTwo,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.hydro.varunadaLazuriteFragment.name,
                  listContentImage: material.stone.hydro.varunadaLazuriteFragment.img,
                  listContentAmount: amountOf.stoneItem.fragment.phaseTwo,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.old.name,
                  listContentImage: material.monsterDrop.handguard.old.img,
                  listContentAmount: amountOf.monsterDropItem.typeOne.phaseTwo,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.dewOfRepudiation.name,
                  listContentImage: material.midBossDrop.dewOfRepudiation.img,
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
                  listContentName: material.nature.sakuraBloom.name,
                  listContentImage: material.nature.sakuraBloom.img,
                  listContentAmount: amountOf.natureItem.phaseThree,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.hydro.varunadaLazuriteFragment.name,
                  listContentImage: material.stone.hydro.varunadaLazuriteFragment.img,
                  listContentAmount: amountOf.stoneItem.fragment.phaseThree,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.kageuchi.name,
                  listContentImage: material.monsterDrop.handguard.kageuchi.img,
                  listContentAmount: amountOf.monsterDropItem.typeTwo.phaseThree,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.dewOfRepudiation.name,
                  listContentImage: material.midBossDrop.dewOfRepudiation.img,
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
                  listContentName: material.nature.sakuraBloom.name,
                  listContentImage: material.nature.sakuraBloom.img,
                  listContentAmount: amountOf.natureItem.phaseFour,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.hydro.varunadaLazuriteChunk.name,
                  listContentImage: material.stone.hydro.varunadaLazuriteChunk.img,
                  listContentAmount: amountOf.stoneItem.chunk.phaseFour,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.kageuchi.name,
                  listContentImage: material.monsterDrop.handguard.kageuchi.img,
                  listContentAmount: amountOf.monsterDropItem.typeTwo.phaseFour,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.dewOfRepudiation.name,
                  listContentImage: material.midBossDrop.dewOfRepudiation.img,
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
                  listContentName: material.nature.sakuraBloom.name,
                  listContentImage: material.nature.sakuraBloom.img,
                  listContentAmount: amountOf.natureItem.phaseFive,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.hydro.varunadaLazuriteChunk.name,
                  listContentImage: material.stone.hydro.varunadaLazuriteChunk.img,
                  listContentAmount: amountOf.stoneItem.chunk.phaseFive,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.famed.name,
                  listContentImage: material.monsterDrop.handguard.famed.img,
                  listContentAmount: amountOf.monsterDropItem.typeThree.phaseFive,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.dewOfRepudiation.name,
                  listContentImage: material.midBossDrop.dewOfRepudiation.img,
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
                  listContentName: material.nature.sakuraBloom.name,
                  listContentImage: material.nature.sakuraBloom.img,
                  listContentAmount: amountOf.natureItem.phaseSix,
                },
                {
                  listContentId: 2,
                  listContentName: material.stone.hydro.varunadaLazuriteGemstone.name,
                  listContentImage: material.stone.hydro.varunadaLazuriteGemstone.img,
                  listContentAmount: amountOf.stoneItem.gemstone.phaseSix,
                },
                {
                  listContentId: 3,
                  listContentName: material.monsterDrop.handguard.famed.name,
                  listContentImage: material.monsterDrop.handguard.famed.img,
                  listContentAmount: amountOf.monsterDropItem.typeThree.phaseSix,
                },
                {
                  listContentId: 4,
                  listContentName: material.midBossDrop.dewOfRepudiation.name,
                  listContentImage: material.midBossDrop.dewOfRepudiation.img,
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

export default kamisatoAyato
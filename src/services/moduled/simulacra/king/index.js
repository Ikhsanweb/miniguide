import { tofHead, tofModus, tofSimulacra } from "../../main";
import * as image from "../../image";

const king = {
  contentId: 1,
  contentName: tofSimulacra.king.name,
  contentImg: image.kingImg,
  contentFull: [
    {
      fullId: 1,
      model: "TofWeapon",
      metadata: {
        weaponName: tofSimulacra.king.weaponName,
        weaponImg: image.scytheOfTheCrowImg,
      },
    },
    {
      fullId: 2,
      model: "KeyValueMeta",
      metadata: {
        meta: [
          {
            metaId: 1,
            metaName: tofModus.grade.title,
            metaValue: tofModus.grade.ssr,
          },
          {
            metaId: 2,
            metaName: tofModus.typeTitle,
            metaValue: tofModus.type,
          },
        ],
      },
    },
    {
      fullId: 3,
      model: "KeyValue",
      metadata: {
        keyValue: {
          title: null,
          lists: [
            {
              listId: 1,
              listKey: tofHead.resonance,
              listValue: tofModus.resonance.dps,
            },
            {
              listId: 2,
              listKey: tofHead.element,
              listValue: tofModus.element.flame,
            },
            {
              listId: 3,
              listKey: tofHead.shatter,
              listValue: "12.5",
            },
            {
              listId: 4,
              listKey: tofHead.charge,
              listValue: "5",
            },
          ],
        },
      },
    },
    {
      fullId: 4,
      model: "TwoText",
      metadata: {
        twoText: {
          title: tofHead.weaponEffect,
          lists: [
            {
              listId: 1,
              listKey: tofModus.element.flame,
              listValue: "Fully charged Weapons will set the target on fire for 8 seconds with the next attack, causing ongoing damage of 58.00% of ATK every second. Ignited targets receive 50% eficacy from healing.",
            },
          ],
        },
      },
    },
    {
      fullId: 5,
      model: "KeyValueTitle",
      metadata: {
        keyValueTitle: {
          title: tofHead.advancement,
          lists: [
            {
              listId: 1,
              listKey: tofModus.stars.one,
              listValue: "Increase shatter by 15%. After shattering the target's shield, deal burn damage equal to 120% of ATK ti the target every second for 15 seconds.",
            },
            {
              listId: 2,
              listKey: tofModus.stars.two,
              listValue: "Increase the current weapon's base HP growth by 16%.",
            },
            {
              listId: 3,
              listKey: tofModus.stars.three,
              listValue: "Increase damage dealt by 10% for each enemy within 6 meters, up to maximum 30%.",
            },
            {
              listId: 4,
              listKey: tofModus.stars.four,
              listValue: "Increase the current weapon`s base ATK growth by 32%.",
            },
            {
              listId: 5,
              listKey: tofModus.stars.five,
              listValue: "Increase damage dealt againts HP shields or shielded enemies by 100%.",
            },
            {
              listId: 6,
              listKey: tofModus.stars.six,
              listValue: "Increase damage dealt by 10% for each enemy slain for 30 seconds. Stack up to 3 times.",
            },
          ],
        },
      },
    },
    {
      fullId: 6,
      model: "KeyValueTitle",
      metadata: {
        keyValueTitle: {
          title: tofHead.awakeningTraits,
          lists: [
            {
              listId: 1,
              listKey: tofModus.awakeningTraits.phaseOne,
              listValue: "Every 7 enemies killed by KING restores HP equall to 8% of Max HP.",
            },
            {
              listId: 2,
              listKey: tofModus.awakeningTraits.phaseTwo,
              listValue: "Every 5 enemies killed by KING restores HP equall to 10% of Max HP.",
            },
          ],
        },
      },
    },
  ],
}

export default king;
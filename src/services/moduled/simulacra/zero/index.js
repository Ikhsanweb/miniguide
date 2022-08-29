import { tofHead, tofModus, tofSimulacra } from "../../main";
import image from "../../image";

const zero = {
  contentId: 3,
  contentName: tofSimulacra.zero.name,
  contentImg: image.zeroImg,
  contentFull: [
    {
      fullId: 1,
      model: "TofWeapon",
      metadata: {
        weaponName: tofSimulacra.zero.weaponName,
        weaponImg: image.negatingCubeImg,
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
              listValue: tofModus.resonance.support,
            },
            {
              listId: 2,
              listKey: tofHead.element,
              listValue: tofModus.element.flame,
            },
            {
              listId: 3,
              listKey: tofHead.shatter,
              listValue: "5.00",
            },
            {
              listId: 4,
              listKey: tofHead.charge,
              listValue: "13.00",
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
              listValue: "Fully charged weapons will set the target on fire for 8 seconds with the next attack, causing ongoing damage of 58.00% of attack every second. Ignited targets receive 50% eficacy from healing.",
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
              listValue: "Deal damage and produce a healing orb, which last for 20 seconds and restore HP of any teammate who picks it up equal to 60% ATK. 2 second cooldown..",
            },
            {
              listId: 2,
              listKey: tofModus.stars.two,
              listValue: "Increase the current weapon's base ATK growth by 16%.",
            },
            {
              listId: 3,
              listKey: tofModus.stars.three,
              listValue: "Reduce skill cooldown from 60 seconds to 30 seconds. restore HP equal to 30% of ATK every second while the shield is active.",
            },
            {
              listId: 4,
              listKey: tofModus.stars.four,
              listValue: "Increase the current weapon`s base HP growth by 32%.",
            },
            {
              listId: 5,
              listKey: tofModus.stars.five,
              listValue: "Damagin a target also produces a damage orb, which last for 20 seconds and increase all damage and healing of any teammate who picks it up by 2% for 30 seconds. Stack up to 10 times. skill cooldown is 2.5 seconds.",
            },
            {
              listId: 6,
              listKey: tofModus.stars.six,
              listValue: "Using a skill grants allies haling orbs and damage orbs equal to the number of Omnium Cubes.",
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
              listValue: "When zero uses a weapon skill, reduce cooldown time for Relics in cooldown by 1.5 seconds. Can only activate for the same weapon 1 time every 5 seconds.",
            },
            {
              listId: 2,
              listKey: tofModus.awakeningTraits.phaseTwo,
              listValue: "When zero uses a weapon skill, reduce cooldown time for Relics in cooldown by 3 seconds. Can only activate for the same weapon 1 time every 5 seconds.",
            },
          ],
        },
      },
    },
  ],
}

export default zero;
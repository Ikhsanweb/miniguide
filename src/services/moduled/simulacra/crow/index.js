import { tofHead, tofModus, tofSimulacra } from "../../main";
import * as image from "../../image";

const crow = {
  contentId: 2,
  contentName: tofSimulacra.crow.name,
  contentImg: image.crowImg,
  contentFull: [
    {
      fullId: 1,
      model: "TofWeapon",
      metadata: {
        weaponName: tofSimulacra.crow.weaponName,
        weaponImg: image.thunderbladesImg,
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
              listValue: tofModus.element.volt,
            },
            {
              listId: 3,
              listKey: tofHead.shatter,
              listValue: "6.00",
            },
            {
              listId: 4,
              listKey: tofHead.charge,
              listValue: "8.00",
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
              listKey: tofModus.element.volt,
              listValue: "When the weapon is fully charged, the next attack will paralie target for 1 second and electrify them fro 6 seconds, negating all buffs and dealing damage equal to 144.00% of ATK. Targets can't receive any buffs for the next 6 second",
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
              listValue: "Attacking targets from behind increase crit rate of all dual blades attack by 40%. backstabbing an electrified target increase crit rate by 100% and crit damage by 30%.",
            },
            {
              listId: 2,
              listKey: tofModus.stars.two,
              listValue: "Increase the current weapon's base ATK growth by 16%.",
            },
            {
              listId: 3,
              listKey: tofModus.stars.three,
              listValue: "Increase damage by 30% to target with less than 60% HP.",
            },
            {
              listId: 4,
              listKey: tofModus.stars.four,
              listValue: "Increase the current weapon`s base HP growth by 32%.",
            },
            {
              listId: 5,
              listKey: tofModus.stars.five,
              listValue: "Triggering Back Attack grants a 100% crit chance for the next 4 second and increase crit damage by 50%. Cooldown 10 second.",
            },
            {
              listId: 6,
              listKey: tofModus.stars.six,
              listValue: "After using a skill, increase volt damage dealt to the target by 20% for 20 seconds.",
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
              listValue: "When Crow is not in the team, increase damage dealt by 6% adn reduce damage received by 4%.",
            },
            {
              listId: 2,
              listKey: tofModus.awakeningTraits.phaseTwo,
              listValue: "When Crow is not in the team, increase damage dealt by 10% adn reduce damage received by 6%. When Crow enters combat, increase damage dealt by 12% for 12 seconds",
            },
          ],
        },
      },
    },
  ],
}

export default crow;
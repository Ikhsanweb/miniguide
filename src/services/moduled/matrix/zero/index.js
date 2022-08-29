import { tofHead, tofModus, tofSimulacra } from "../../main";
import image from "../../image";

const king = {
  contentId: 3,
  contentName: tofSimulacra.zero.name,
  contentImg: image.zeroMatrixImg,
  contentFull: [
    {
      fullId: 1,
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
            metaValue: tofModus.typeMatrix,
          },
        ],
      },
    },
    {
      fullId: 2,
      model: "TwoText",
      metadata: {
        twoText: {
          title: null,
          lists: [
            {
              listId: 1,
              listKey: tofHead.sets.twoPieces,
              listValue: 'Upon using a discharge skill to switch to the current weapon, gain a shield equal to 150%/200%/250%/300% of ATK for 6 seconds.',
            },
            {
              listId: 2,
              listKey: tofHead.sets.fourPieces,
              listValue: 'While the shield is active, you and your teammates deal 16%/20%/24%/28% more damage.',
            },
          ],
        },
      },
    },
  ],
}

export default king;
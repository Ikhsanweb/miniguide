import { tofHead, tofModus, tofSimulacra } from "../../main";
import image from "../../image";

const crow = {
  contentId: 2,
  contentName: tofSimulacra.crow.name,
  contentImg: image.crowMatrixImg,
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
              listValue: 'Increase crit damage to targets with less than 60% HP by 24%/30%/36%/42%.',
            },
            {
              listId: 2,
              listKey: tofHead.sets.fourPieces,
              listValue: 'Crits deal additional damage over time equal to 18%/22%/26%/30% of ATK every second for 5 second. Does not stack.',
            },
          ],
        },
      },
    },
  ],
}

export default crow;
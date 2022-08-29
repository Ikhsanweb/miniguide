import { tofHead, tofModus, tofSimulacra } from "../../main";
import * as image from "../../image";

const king = {
  contentId: 1,
  contentName: tofSimulacra.king.name,
  contentImg: image.kingMatrixImg,
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
              listValue: 'When a target is shattered, grant 8%/10%/12%/14% damage boost for 15 seconds. Only the highest level is applied when the effect is obtained repeatedly.',
            },
            {
              listId: 2,
              listKey: tofHead.sets.fourPieces,
              listValue: 'When there are more than 2 enemies arround, hits restore HP equal to 14%/18%/22%/26% of damage dealt upon attacking. the maximum HP restored every 0.5 seconds must not exceed 36%/42%/48%/54% of ATK.',
            },
          ],
        },
      },
    },
  ],
}

export default king;
import { Decimal } from "decimal.js";

export type BlockDailyUpdateInput = {
  averageBlockSize?: Decimal;
  averageBlockTimeMs?: number;
  averageDifficulty?: Decimal;
  blocksCount?: number;
  blocksWithGraffitiCount?: number;
  chainSequence?: number;
  cumulativeUniqueGraffiti?: number;
  date?: Date;
  transactionsCount?: number;
  uniqueGraffitiCount?: number;
};

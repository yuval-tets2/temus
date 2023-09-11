import { Decimal } from "decimal.js";

export type BlockDaily = {
  averageBlockSize: Decimal;
  averageBlockTimeMs: number;
  averageDifficulty: Decimal;
  blocksCount: number;
  blocksWithGraffitiCount: number;
  chainSequence: number;
  createdAt: Date;
  cumulativeUniqueGraffiti: number;
  date: Date;
  id: number;
  transactionsCount: number;
  uniqueGraffitiCount: number;
  updatedAt: Date;
};

import { SortOrder } from "../../util/SortOrder";

export type BlockDailyOrderByInput = {
  averageBlockSize?: SortOrder;
  averageBlockTimeMs?: SortOrder;
  averageDifficulty?: SortOrder;
  blocksCount?: SortOrder;
  blocksWithGraffitiCount?: SortOrder;
  chainSequence?: SortOrder;
  createdAt?: SortOrder;
  cumulativeUniqueGraffiti?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  transactionsCount?: SortOrder;
  uniqueGraffitiCount?: SortOrder;
  updatedAt?: SortOrder;
};

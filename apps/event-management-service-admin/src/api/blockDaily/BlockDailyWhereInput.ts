import { DecimalFilter } from "../../util/DecimalFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type BlockDailyWhereInput = {
  averageBlockSize?: DecimalFilter;
  averageBlockTimeMs?: IntFilter;
  averageDifficulty?: DecimalFilter;
  blocksCount?: IntFilter;
  blocksWithGraffitiCount?: IntFilter;
  chainSequence?: IntFilter;
  createdAt?: DateTimeFilter;
  cumulativeUniqueGraffiti?: IntFilter;
  date?: DateTimeFilter;
  id?: IntFilter;
  transactionsCount?: IntFilter;
  uniqueGraffitiCount?: IntFilter;
  updatedAt?: DateTimeFilter;
};

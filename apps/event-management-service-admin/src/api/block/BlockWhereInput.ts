import { BlockTransactionListRelationFilter } from "../blockTransaction/BlockTransactionListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BlockWhereInput = {
  blocksTransactions?: BlockTransactionListRelationFilter;
  createdAt?: DateTimeFilter;
  difficulty?: DecimalNullableFilter;
  graffiti?: StringFilter;
  hash?: StringFilter;
  id?: IntFilter;
  main?: BooleanFilter;
  networkVersion?: IntFilter;
  previousBlockHash?: StringFilter;
  sequence?: IntFilter;
  size?: IntNullableFilter;
  timeSinceLastBlockMs?: IntNullableFilter;
  timestamp?: DateTimeFilter;
  transactionsCount?: IntFilter;
  updatedAt?: DateTimeFilter;
  work?: DecimalNullableFilter;
};

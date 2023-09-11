import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type FaucetTransactionWhereInput = {
  completedAt?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  email?: StringNullableFilter;
  hash?: StringNullableFilter;
  id?: IntFilter;
  publicKey?: StringFilter;
  startedAt?: DateTimeNullableFilter;
  tries?: IntFilter;
  updatedAt?: DateTimeFilter;
};

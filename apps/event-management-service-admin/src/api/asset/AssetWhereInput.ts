import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { AssetDescriptionListRelationFilter } from "../assetDescription/AssetDescriptionListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AssetWhereInput = {
  createdAt?: DateTimeFilter;
  createdTransaction?: TransactionWhereUniqueInput;
  descriptions?: AssetDescriptionListRelationFilter;
  id?: IntFilter;
  identifier?: StringFilter;
  metadata?: StringFilter;
  name?: StringFilter;
  owner?: StringFilter;
  supply?: BigIntFilter;
  updatedAt?: DateTimeFilter;
  verifiedAt?: DateTimeNullableFilter;
};

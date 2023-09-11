import { AssetDescriptionListRelationFilter } from "../assetDescription/AssetDescriptionListRelationFilter";
import { BlockTransactionListRelationFilter } from "../blockTransaction/BlockTransactionListRelationFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TransactionWhereInput = {
  assetDescriptions?: AssetDescriptionListRelationFilter;
  blocksTransactions?: BlockTransactionListRelationFilter;
  createdAssets?: AssetListRelationFilter;
  createdAt?: DateTimeFilter;
  expiration?: IntNullableFilter;
  fee?: FloatFilter;
  hash?: StringFilter;
  id?: IntFilter;
  networkVersion?: IntFilter;
  notes?: JsonFilter;
  size?: IntFilter;
  spends?: JsonFilter;
  updatedAt?: DateTimeFilter;
};

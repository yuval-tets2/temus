import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { BigIntFilter } from "../../util/BigIntFilter";

export type AssetDescriptionWhereInput = {
  asset?: AssetWhereUniqueInput;
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  transaction?: TransactionWhereUniqueInput;
  type?: "BURN" | "MINT";
  updatedAt?: DateTimeFilter;
  value?: BigIntFilter;
};

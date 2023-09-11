import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type AssetDescriptionUpdateInput = {
  asset?: AssetWhereUniqueInput;
  transaction?: TransactionWhereUniqueInput;
  type?: "BURN" | "MINT";
  value?: bigint;
};

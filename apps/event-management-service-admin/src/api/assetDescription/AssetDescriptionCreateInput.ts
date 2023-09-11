import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type AssetDescriptionCreateInput = {
  asset: AssetWhereUniqueInput;
  transaction: TransactionWhereUniqueInput;
  type: "BURN" | "MINT";
  value: bigint;
};

import { AssetDescriptionCreateNestedManyWithoutTransactionsInput } from "./AssetDescriptionCreateNestedManyWithoutTransactionsInput";
import { BlockTransactionCreateNestedManyWithoutTransactionsInput } from "./BlockTransactionCreateNestedManyWithoutTransactionsInput";
import { AssetCreateNestedManyWithoutTransactionsInput } from "./AssetCreateNestedManyWithoutTransactionsInput";
import { InputJsonValue } from "../../types";

export type TransactionCreateInput = {
  assetDescriptions?: AssetDescriptionCreateNestedManyWithoutTransactionsInput;
  blocksTransactions?: BlockTransactionCreateNestedManyWithoutTransactionsInput;
  createdAssets?: AssetCreateNestedManyWithoutTransactionsInput;
  expiration?: number | null;
  fee: number;
  hash: string;
  networkVersion: number;
  notes: InputJsonValue;
  size: number;
  spends: InputJsonValue;
};

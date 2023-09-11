import { AssetDescriptionUpdateManyWithoutTransactionsInput } from "./AssetDescriptionUpdateManyWithoutTransactionsInput";
import { BlockTransactionUpdateManyWithoutTransactionsInput } from "./BlockTransactionUpdateManyWithoutTransactionsInput";
import { AssetUpdateManyWithoutTransactionsInput } from "./AssetUpdateManyWithoutTransactionsInput";
import { InputJsonValue } from "../../types";

export type TransactionUpdateInput = {
  assetDescriptions?: AssetDescriptionUpdateManyWithoutTransactionsInput;
  blocksTransactions?: BlockTransactionUpdateManyWithoutTransactionsInput;
  createdAssets?: AssetUpdateManyWithoutTransactionsInput;
  expiration?: number | null;
  fee?: number;
  hash?: string;
  networkVersion?: number;
  notes?: InputJsonValue;
  size?: number;
  spends?: InputJsonValue;
};

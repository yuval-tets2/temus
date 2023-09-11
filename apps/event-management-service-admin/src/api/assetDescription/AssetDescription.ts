import { Asset } from "../asset/Asset";
import { Transaction } from "../transaction/Transaction";

export type AssetDescription = {
  asset?: Asset;
  createdAt: Date;
  id: number;
  transaction?: Transaction;
  type?: "BURN" | "MINT";
  updatedAt: Date;
  value: bigint;
};

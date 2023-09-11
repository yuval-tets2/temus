import { Transaction } from "../transaction/Transaction";
import { AssetDescription } from "../assetDescription/AssetDescription";

export type Asset = {
  createdAt: Date;
  createdTransaction?: Transaction;
  descriptions?: Array<AssetDescription>;
  id: number;
  identifier: string;
  metadata: string;
  name: string;
  owner: string;
  supply: bigint;
  updatedAt: Date;
  verifiedAt: Date | null;
};

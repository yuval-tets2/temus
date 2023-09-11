import { AssetDescription } from "../assetDescription/AssetDescription";
import { BlockTransaction } from "../blockTransaction/BlockTransaction";
import { Asset } from "../asset/Asset";
import { JsonValue } from "type-fest";

export type Transaction = {
  assetDescriptions?: Array<AssetDescription>;
  blocksTransactions?: Array<BlockTransaction>;
  createdAssets?: Array<Asset>;
  createdAt: Date;
  expiration: number | null;
  fee: number;
  hash: string;
  id: number;
  networkVersion: number;
  notes: JsonValue;
  size: number;
  spends: JsonValue;
  updatedAt: Date;
};

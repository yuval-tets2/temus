import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { AssetDescriptionUpdateManyWithoutAssetsInput } from "./AssetDescriptionUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  createdTransaction?: TransactionWhereUniqueInput;
  descriptions?: AssetDescriptionUpdateManyWithoutAssetsInput;
  identifier?: string;
  metadata?: string;
  name?: string;
  owner?: string;
  supply?: bigint;
  verifiedAt?: Date | null;
};

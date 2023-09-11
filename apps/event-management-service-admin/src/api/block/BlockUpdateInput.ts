import { BlockTransactionUpdateManyWithoutBlocksInput } from "./BlockTransactionUpdateManyWithoutBlocksInput";
import { Decimal } from "decimal.js";

export type BlockUpdateInput = {
  blocksTransactions?: BlockTransactionUpdateManyWithoutBlocksInput;
  difficulty?: Decimal | null;
  graffiti?: string;
  hash?: string;
  main?: boolean;
  networkVersion?: number;
  previousBlockHash?: string;
  sequence?: number;
  size?: number | null;
  timeSinceLastBlockMs?: number | null;
  timestamp?: Date;
  transactionsCount?: number;
  work?: Decimal | null;
};

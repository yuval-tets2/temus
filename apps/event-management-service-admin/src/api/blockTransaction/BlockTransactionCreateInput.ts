import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type BlockTransactionCreateInput = {
  block: BlockWhereUniqueInput;
  index?: number | null;
  transaction: TransactionWhereUniqueInput;
};

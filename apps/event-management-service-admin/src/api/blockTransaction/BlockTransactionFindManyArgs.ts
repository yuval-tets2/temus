import { BlockTransactionWhereInput } from "./BlockTransactionWhereInput";
import { BlockTransactionOrderByInput } from "./BlockTransactionOrderByInput";

export type BlockTransactionFindManyArgs = {
  where?: BlockTransactionWhereInput;
  orderBy?: Array<BlockTransactionOrderByInput>;
  skip?: number;
  take?: number;
};

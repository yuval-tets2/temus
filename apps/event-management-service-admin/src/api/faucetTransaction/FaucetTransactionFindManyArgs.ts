import { FaucetTransactionWhereInput } from "./FaucetTransactionWhereInput";
import { FaucetTransactionOrderByInput } from "./FaucetTransactionOrderByInput";

export type FaucetTransactionFindManyArgs = {
  where?: FaucetTransactionWhereInput;
  orderBy?: Array<FaucetTransactionOrderByInput>;
  skip?: number;
  take?: number;
};

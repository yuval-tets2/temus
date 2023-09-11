import { SortOrder } from "../../util/SortOrder";

export type FaucetTransactionOrderByInput = {
  completedAt?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  publicKey?: SortOrder;
  startedAt?: SortOrder;
  tries?: SortOrder;
  updatedAt?: SortOrder;
};

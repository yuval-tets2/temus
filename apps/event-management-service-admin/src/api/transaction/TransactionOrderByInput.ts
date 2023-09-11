import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  expiration?: SortOrder;
  fee?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  networkVersion?: SortOrder;
  notes?: SortOrder;
  size?: SortOrder;
  spends?: SortOrder;
  updatedAt?: SortOrder;
};

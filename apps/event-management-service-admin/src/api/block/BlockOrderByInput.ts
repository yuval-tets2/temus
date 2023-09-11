import { SortOrder } from "../../util/SortOrder";

export type BlockOrderByInput = {
  createdAt?: SortOrder;
  difficulty?: SortOrder;
  graffiti?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  main?: SortOrder;
  networkVersion?: SortOrder;
  previousBlockHash?: SortOrder;
  sequence?: SortOrder;
  size?: SortOrder;
  timeSinceLastBlockMs?: SortOrder;
  timestamp?: SortOrder;
  transactionsCount?: SortOrder;
  updatedAt?: SortOrder;
  work?: SortOrder;
};

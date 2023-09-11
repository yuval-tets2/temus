import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  createdAt?: SortOrder;
  created_transaction_id?: SortOrder;
  id?: SortOrder;
  identifier?: SortOrder;
  metadata?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  supply?: SortOrder;
  updatedAt?: SortOrder;
  verifiedAt?: SortOrder;
};

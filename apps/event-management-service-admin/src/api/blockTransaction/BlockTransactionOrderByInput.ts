import { SortOrder } from "../../util/SortOrder";

export type BlockTransactionOrderByInput = {
  block_id?: SortOrder;
  id?: SortOrder;
  index?: SortOrder;
  transaction_id?: SortOrder;
};

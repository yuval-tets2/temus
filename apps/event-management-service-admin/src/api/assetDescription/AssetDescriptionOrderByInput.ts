import { SortOrder } from "../../util/SortOrder";

export type AssetDescriptionOrderByInput = {
  asset_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  transaction_id?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};

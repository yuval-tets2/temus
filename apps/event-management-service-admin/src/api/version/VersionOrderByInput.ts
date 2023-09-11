import { SortOrder } from "../../util/SortOrder";

export type VersionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  version?: SortOrder;
};

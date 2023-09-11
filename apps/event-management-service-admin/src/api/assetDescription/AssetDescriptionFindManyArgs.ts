import { AssetDescriptionWhereInput } from "./AssetDescriptionWhereInput";
import { AssetDescriptionOrderByInput } from "./AssetDescriptionOrderByInput";

export type AssetDescriptionFindManyArgs = {
  where?: AssetDescriptionWhereInput;
  orderBy?: Array<AssetDescriptionOrderByInput>;
  skip?: number;
  take?: number;
};

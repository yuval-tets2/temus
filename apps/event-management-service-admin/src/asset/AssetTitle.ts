import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "name";

export const AssetTitle = (record: TAsset): string => {
  return record.name || String(record.id);
};

import { AssetDescription as TAssetDescription } from "../api/assetDescription/AssetDescription";

export const ASSETDESCRIPTION_TITLE_FIELD = "id";

export const AssetDescriptionTitle = (record: TAssetDescription): string => {
  return record.id || String(record.id);
};

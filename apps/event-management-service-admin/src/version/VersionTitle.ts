import { Version as TVersion } from "../api/version/Version";

export const VERSION_TITLE_FIELD = "version";

export const VersionTitle = (record: TVersion): string => {
  return record.version || String(record.id);
};

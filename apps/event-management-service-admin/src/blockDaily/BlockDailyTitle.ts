import { BlockDaily as TBlockDaily } from "../api/blockDaily/BlockDaily";

export const BLOCKDAILY_TITLE_FIELD = "id";

export const BlockDailyTitle = (record: TBlockDaily): string => {
  return record.id || String(record.id);
};

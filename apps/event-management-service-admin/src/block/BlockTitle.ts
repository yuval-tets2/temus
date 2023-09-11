import { Block as TBlock } from "../api/block/Block";

export const BLOCK_TITLE_FIELD = "graffiti";

export const BlockTitle = (record: TBlock): string => {
  return record.graffiti || String(record.id);
};

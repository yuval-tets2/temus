import { BlockTransaction as TBlockTransaction } from "../api/blockTransaction/BlockTransaction";

export const BLOCKTRANSACTION_TITLE_FIELD = "id";

export const BlockTransactionTitle = (record: TBlockTransaction): string => {
  return record.id || String(record.id);
};

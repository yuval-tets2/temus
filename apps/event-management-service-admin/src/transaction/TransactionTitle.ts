import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "hash";

export const TransactionTitle = (record: TTransaction): string => {
  return record.hash || String(record.id);
};

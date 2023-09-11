import { FaucetTransaction as TFaucetTransaction } from "../api/faucetTransaction/FaucetTransaction";

export const FAUCETTRANSACTION_TITLE_FIELD = "email";

export const FaucetTransactionTitle = (record: TFaucetTransaction): string => {
  return record.email || String(record.id);
};

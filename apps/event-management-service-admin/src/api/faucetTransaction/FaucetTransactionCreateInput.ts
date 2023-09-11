export type FaucetTransactionCreateInput = {
  completedAt?: Date | null;
  email?: string | null;
  hash?: string | null;
  publicKey: string;
  startedAt?: Date | null;
  tries: number;
};

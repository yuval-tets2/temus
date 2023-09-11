export type FaucetTransaction = {
  completedAt: Date | null;
  createdAt: Date;
  email: string | null;
  hash: string | null;
  id: number;
  publicKey: string;
  startedAt: Date | null;
  tries: number;
  updatedAt: Date;
};

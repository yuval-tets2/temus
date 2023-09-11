import { Block } from "../block/Block";
import { Transaction } from "../transaction/Transaction";

export type BlockTransaction = {
  block?: Block;
  id: string;
  index: number | null;
  transaction?: Transaction;
};

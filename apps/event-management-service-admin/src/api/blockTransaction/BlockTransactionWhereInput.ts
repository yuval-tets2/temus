import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type BlockTransactionWhereInput = {
  block?: BlockWhereUniqueInput;
  id?: StringFilter;
  index?: IntNullableFilter;
  transaction?: TransactionWhereUniqueInput;
};

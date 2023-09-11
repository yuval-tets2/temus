import { BlockWhereInput } from "./BlockWhereInput";

export type BlockListRelationFilter = {
  every?: BlockWhereInput;
  some?: BlockWhereInput;
  none?: BlockWhereInput;
};

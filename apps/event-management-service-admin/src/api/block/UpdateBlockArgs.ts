import { BlockWhereUniqueInput } from "./BlockWhereUniqueInput";
import { BlockUpdateInput } from "./BlockUpdateInput";

export type UpdateBlockArgs = {
  where: BlockWhereUniqueInput;
  data: BlockUpdateInput;
};

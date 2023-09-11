import { BlockWhereInput } from "./BlockWhereInput";
import { BlockOrderByInput } from "./BlockOrderByInput";

export type BlockFindManyArgs = {
  where?: BlockWhereInput;
  orderBy?: Array<BlockOrderByInput>;
  skip?: number;
  take?: number;
};

import { BlockDailyWhereInput } from "./BlockDailyWhereInput";
import { BlockDailyOrderByInput } from "./BlockDailyOrderByInput";

export type BlockDailyFindManyArgs = {
  where?: BlockDailyWhereInput;
  orderBy?: Array<BlockDailyOrderByInput>;
  skip?: number;
  take?: number;
};

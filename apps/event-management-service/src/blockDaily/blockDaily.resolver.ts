import * as graphql from "@nestjs/graphql";
import { BlockDailyResolverBase } from "./base/blockDaily.resolver.base";
import { BlockDaily } from "./base/BlockDaily";
import { BlockDailyService } from "./blockDaily.service";

@graphql.Resolver(() => BlockDaily)
export class BlockDailyResolver extends BlockDailyResolverBase {
  constructor(protected readonly service: BlockDailyService) {
    super(service);
  }
}

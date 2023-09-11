import * as graphql from "@nestjs/graphql";
import { BlockTransactionResolverBase } from "./base/blockTransaction.resolver.base";
import { BlockTransaction } from "./base/BlockTransaction";
import { BlockTransactionService } from "./blockTransaction.service";

@graphql.Resolver(() => BlockTransaction)
export class BlockTransactionResolver extends BlockTransactionResolverBase {
  constructor(protected readonly service: BlockTransactionService) {
    super(service);
  }
}

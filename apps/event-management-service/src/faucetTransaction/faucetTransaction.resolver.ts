import * as graphql from "@nestjs/graphql";
import { FaucetTransactionResolverBase } from "./base/faucetTransaction.resolver.base";
import { FaucetTransaction } from "./base/FaucetTransaction";
import { FaucetTransactionService } from "./faucetTransaction.service";

@graphql.Resolver(() => FaucetTransaction)
export class FaucetTransactionResolver extends FaucetTransactionResolverBase {
  constructor(protected readonly service: FaucetTransactionService) {
    super(service);
  }
}

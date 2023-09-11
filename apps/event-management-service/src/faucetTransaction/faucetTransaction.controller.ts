import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FaucetTransactionService } from "./faucetTransaction.service";
import { FaucetTransactionControllerBase } from "./base/faucetTransaction.controller.base";

@swagger.ApiTags("faucetTransactions")
@common.Controller("faucetTransactions")
export class FaucetTransactionController extends FaucetTransactionControllerBase {
  constructor(protected readonly service: FaucetTransactionService) {
    super(service);
  }
}

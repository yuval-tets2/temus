import { Module } from "@nestjs/common";
import { FaucetTransactionModuleBase } from "./base/faucetTransaction.module.base";
import { FaucetTransactionService } from "./faucetTransaction.service";
import { FaucetTransactionController } from "./faucetTransaction.controller";
import { FaucetTransactionResolver } from "./faucetTransaction.resolver";

@Module({
  imports: [FaucetTransactionModuleBase],
  controllers: [FaucetTransactionController],
  providers: [FaucetTransactionService, FaucetTransactionResolver],
  exports: [FaucetTransactionService],
})
export class FaucetTransactionModule {}

import { Module } from "@nestjs/common";
import { BlockTransactionModuleBase } from "./base/blockTransaction.module.base";
import { BlockTransactionService } from "./blockTransaction.service";
import { BlockTransactionController } from "./blockTransaction.controller";
import { BlockTransactionResolver } from "./blockTransaction.resolver";

@Module({
  imports: [BlockTransactionModuleBase],
  controllers: [BlockTransactionController],
  providers: [BlockTransactionService, BlockTransactionResolver],
  exports: [BlockTransactionService],
})
export class BlockTransactionModule {}

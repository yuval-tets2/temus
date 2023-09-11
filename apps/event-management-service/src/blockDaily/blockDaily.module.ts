import { Module } from "@nestjs/common";
import { BlockDailyModuleBase } from "./base/blockDaily.module.base";
import { BlockDailyService } from "./blockDaily.service";
import { BlockDailyController } from "./blockDaily.controller";
import { BlockDailyResolver } from "./blockDaily.resolver";

@Module({
  imports: [BlockDailyModuleBase],
  controllers: [BlockDailyController],
  providers: [BlockDailyService, BlockDailyResolver],
  exports: [BlockDailyService],
})
export class BlockDailyModule {}

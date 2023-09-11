import { Module } from "@nestjs/common";
import { BlockModuleBase } from "./base/block.module.base";
import { BlockService } from "./block.service";
import { BlockController } from "./block.controller";
import { BlockResolver } from "./block.resolver";

@Module({
  imports: [BlockModuleBase],
  controllers: [BlockController],
  providers: [BlockService, BlockResolver],
  exports: [BlockService],
})
export class BlockModule {}

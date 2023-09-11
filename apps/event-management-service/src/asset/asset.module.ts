import { Module } from "@nestjs/common";
import { AssetModuleBase } from "./base/asset.module.base";
import { AssetService } from "./asset.service";
import { AssetController } from "./asset.controller";
import { AssetResolver } from "./asset.resolver";

@Module({
  imports: [AssetModuleBase],
  controllers: [AssetController],
  providers: [AssetService, AssetResolver],
  exports: [AssetService],
})
export class AssetModule {}

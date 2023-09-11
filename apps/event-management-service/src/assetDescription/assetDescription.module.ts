import { Module } from "@nestjs/common";
import { AssetDescriptionModuleBase } from "./base/assetDescription.module.base";
import { AssetDescriptionService } from "./assetDescription.service";
import { AssetDescriptionController } from "./assetDescription.controller";
import { AssetDescriptionResolver } from "./assetDescription.resolver";

@Module({
  imports: [AssetDescriptionModuleBase],
  controllers: [AssetDescriptionController],
  providers: [AssetDescriptionService, AssetDescriptionResolver],
  exports: [AssetDescriptionService],
})
export class AssetDescriptionModule {}

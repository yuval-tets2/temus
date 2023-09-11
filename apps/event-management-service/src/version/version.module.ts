import { Module } from "@nestjs/common";
import { VersionModuleBase } from "./base/version.module.base";
import { VersionService } from "./version.service";
import { VersionController } from "./version.controller";
import { VersionResolver } from "./version.resolver";

@Module({
  imports: [VersionModuleBase],
  controllers: [VersionController],
  providers: [VersionService, VersionResolver],
  exports: [VersionService],
})
export class VersionModule {}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetDescriptionServiceBase } from "./base/assetDescription.service.base";

@Injectable()
export class AssetDescriptionService extends AssetDescriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

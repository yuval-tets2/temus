import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlockDailyServiceBase } from "./base/blockDaily.service.base";

@Injectable()
export class BlockDailyService extends BlockDailyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

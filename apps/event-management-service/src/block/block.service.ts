import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlockServiceBase } from "./base/block.service.base";

@Injectable()
export class BlockService extends BlockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

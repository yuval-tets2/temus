import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlockTransactionServiceBase } from "./base/blockTransaction.service.base";

@Injectable()
export class BlockTransactionService extends BlockTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

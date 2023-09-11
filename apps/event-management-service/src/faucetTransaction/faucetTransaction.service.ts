import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FaucetTransactionServiceBase } from "./base/faucetTransaction.service.base";

@Injectable()
export class FaucetTransactionService extends FaucetTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

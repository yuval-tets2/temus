/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FaucetTransaction } from "@prisma/client";

export class FaucetTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FaucetTransactionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FaucetTransactionCountArgs>
  ): Promise<number> {
    return this.prisma.faucetTransaction.count(args);
  }

  async findMany<T extends Prisma.FaucetTransactionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FaucetTransactionFindManyArgs>
  ): Promise<FaucetTransaction[]> {
    return this.prisma.faucetTransaction.findMany(args);
  }
  async findOne<T extends Prisma.FaucetTransactionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FaucetTransactionFindUniqueArgs>
  ): Promise<FaucetTransaction | null> {
    return this.prisma.faucetTransaction.findUnique(args);
  }
  async create<T extends Prisma.FaucetTransactionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FaucetTransactionCreateArgs>
  ): Promise<FaucetTransaction> {
    return this.prisma.faucetTransaction.create<T>(args);
  }
  async update<T extends Prisma.FaucetTransactionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FaucetTransactionUpdateArgs>
  ): Promise<FaucetTransaction> {
    return this.prisma.faucetTransaction.update<T>(args);
  }
  async delete<T extends Prisma.FaucetTransactionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FaucetTransactionDeleteArgs>
  ): Promise<FaucetTransaction> {
    return this.prisma.faucetTransaction.delete(args);
  }
}

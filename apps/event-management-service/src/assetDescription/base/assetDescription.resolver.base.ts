/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateAssetDescriptionArgs } from "./CreateAssetDescriptionArgs";
import { UpdateAssetDescriptionArgs } from "./UpdateAssetDescriptionArgs";
import { DeleteAssetDescriptionArgs } from "./DeleteAssetDescriptionArgs";
import { AssetDescriptionCountArgs } from "./AssetDescriptionCountArgs";
import { AssetDescriptionFindManyArgs } from "./AssetDescriptionFindManyArgs";
import { AssetDescriptionFindUniqueArgs } from "./AssetDescriptionFindUniqueArgs";
import { AssetDescription } from "./AssetDescription";
import { Asset } from "../../asset/base/Asset";
import { Transaction } from "../../transaction/base/Transaction";
import { AssetDescriptionService } from "../assetDescription.service";
@graphql.Resolver(() => AssetDescription)
export class AssetDescriptionResolverBase {
  constructor(protected readonly service: AssetDescriptionService) {}

  async _assetDescriptionsMeta(
    @graphql.Args() args: AssetDescriptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssetDescription])
  async assetDescriptions(
    @graphql.Args() args: AssetDescriptionFindManyArgs
  ): Promise<AssetDescription[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => AssetDescription, { nullable: true })
  async assetDescription(
    @graphql.Args() args: AssetDescriptionFindUniqueArgs
  ): Promise<AssetDescription | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssetDescription)
  async createAssetDescription(
    @graphql.Args() args: CreateAssetDescriptionArgs
  ): Promise<AssetDescription> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        asset: {
          connect: args.data.asset,
        },

        transaction: {
          connect: args.data.transaction,
        },
      },
    });
  }

  @graphql.Mutation(() => AssetDescription)
  async updateAssetDescription(
    @graphql.Args() args: UpdateAssetDescriptionArgs
  ): Promise<AssetDescription | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          asset: {
            connect: args.data.asset,
          },

          transaction: {
            connect: args.data.transaction,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AssetDescription)
  async deleteAssetDescription(
    @graphql.Args() args: DeleteAssetDescriptionArgs
  ): Promise<AssetDescription | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Asset, {
    nullable: true,
    name: "asset",
  })
  async resolveFieldAsset(
    @graphql.Parent() parent: AssetDescription
  ): Promise<Asset | null> {
    const result = await this.service.getAsset(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Transaction, {
    nullable: true,
    name: "transaction",
  })
  async resolveFieldTransaction(
    @graphql.Parent() parent: AssetDescription
  ): Promise<Transaction | null> {
    const result = await this.service.getTransaction(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

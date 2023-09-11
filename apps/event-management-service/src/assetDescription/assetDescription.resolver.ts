import * as graphql from "@nestjs/graphql";
import { AssetDescriptionResolverBase } from "./base/assetDescription.resolver.base";
import { AssetDescription } from "./base/AssetDescription";
import { AssetDescriptionService } from "./assetDescription.service";

@graphql.Resolver(() => AssetDescription)
export class AssetDescriptionResolver extends AssetDescriptionResolverBase {
  constructor(protected readonly service: AssetDescriptionService) {
    super(service);
  }
}

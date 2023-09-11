import * as graphql from "@nestjs/graphql";
import { AssetResolverBase } from "./base/asset.resolver.base";
import { Asset } from "./base/Asset";
import { AssetService } from "./asset.service";

@graphql.Resolver(() => Asset)
export class AssetResolver extends AssetResolverBase {
  constructor(protected readonly service: AssetService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { BlockResolverBase } from "./base/block.resolver.base";
import { Block } from "./base/Block";
import { BlockService } from "./block.service";

@graphql.Resolver(() => Block)
export class BlockResolver extends BlockResolverBase {
  constructor(protected readonly service: BlockService) {
    super(service);
  }
}

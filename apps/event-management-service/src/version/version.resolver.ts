import * as graphql from "@nestjs/graphql";
import { VersionResolverBase } from "./base/version.resolver.base";
import { Version } from "./base/Version";
import { VersionService } from "./version.service";

@graphql.Resolver(() => Version)
export class VersionResolver extends VersionResolverBase {
  constructor(protected readonly service: VersionService) {
    super(service);
  }
}

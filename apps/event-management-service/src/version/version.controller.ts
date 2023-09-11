import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VersionService } from "./version.service";
import { VersionControllerBase } from "./base/version.controller.base";

@swagger.ApiTags("versions")
@common.Controller("versions")
export class VersionController extends VersionControllerBase {
  constructor(protected readonly service: VersionService) {
    super(service);
  }
}

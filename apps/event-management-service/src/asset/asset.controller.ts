import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetService } from "./asset.service";
import { AssetControllerBase } from "./base/asset.controller.base";

@swagger.ApiTags("assets")
@common.Controller("assets")
export class AssetController extends AssetControllerBase {
  constructor(protected readonly service: AssetService) {
    super(service);
  }
}

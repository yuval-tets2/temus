import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetDescriptionService } from "./assetDescription.service";
import { AssetDescriptionControllerBase } from "./base/assetDescription.controller.base";

@swagger.ApiTags("assetDescriptions")
@common.Controller("assetDescriptions")
export class AssetDescriptionController extends AssetDescriptionControllerBase {
  constructor(protected readonly service: AssetDescriptionService) {
    super(service);
  }
}

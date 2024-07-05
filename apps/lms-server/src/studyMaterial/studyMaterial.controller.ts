import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StudyMaterialService } from "./studyMaterial.service";
import { StudyMaterialControllerBase } from "./base/studyMaterial.controller.base";

@swagger.ApiTags("studyMaterials")
@common.Controller("studyMaterials")
export class StudyMaterialController extends StudyMaterialControllerBase {
  constructor(
    protected readonly service: StudyMaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

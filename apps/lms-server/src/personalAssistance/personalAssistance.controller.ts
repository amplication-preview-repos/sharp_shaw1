import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PersonalAssistanceService } from "./personalAssistance.service";
import { PersonalAssistanceControllerBase } from "./base/personalAssistance.controller.base";

@swagger.ApiTags("personalAssistances")
@common.Controller("personalAssistances")
export class PersonalAssistanceController extends PersonalAssistanceControllerBase {
  constructor(
    protected readonly service: PersonalAssistanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

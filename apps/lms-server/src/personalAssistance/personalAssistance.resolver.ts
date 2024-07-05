import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PersonalAssistanceResolverBase } from "./base/personalAssistance.resolver.base";
import { PersonalAssistance } from "./base/PersonalAssistance";
import { PersonalAssistanceService } from "./personalAssistance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PersonalAssistance)
export class PersonalAssistanceResolver extends PersonalAssistanceResolverBase {
  constructor(
    protected readonly service: PersonalAssistanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

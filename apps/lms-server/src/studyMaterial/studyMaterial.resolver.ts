import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StudyMaterialResolverBase } from "./base/studyMaterial.resolver.base";
import { StudyMaterial } from "./base/StudyMaterial";
import { StudyMaterialService } from "./studyMaterial.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StudyMaterial)
export class StudyMaterialResolver extends StudyMaterialResolverBase {
  constructor(
    protected readonly service: StudyMaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

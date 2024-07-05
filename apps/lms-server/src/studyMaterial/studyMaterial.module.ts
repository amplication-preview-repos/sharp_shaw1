import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StudyMaterialModuleBase } from "./base/studyMaterial.module.base";
import { StudyMaterialService } from "./studyMaterial.service";
import { StudyMaterialController } from "./studyMaterial.controller";
import { StudyMaterialResolver } from "./studyMaterial.resolver";

@Module({
  imports: [StudyMaterialModuleBase, forwardRef(() => AuthModule)],
  controllers: [StudyMaterialController],
  providers: [StudyMaterialService, StudyMaterialResolver],
  exports: [StudyMaterialService],
})
export class StudyMaterialModule {}

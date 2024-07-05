import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PersonalAssistanceModuleBase } from "./base/personalAssistance.module.base";
import { PersonalAssistanceService } from "./personalAssistance.service";
import { PersonalAssistanceController } from "./personalAssistance.controller";
import { PersonalAssistanceResolver } from "./personalAssistance.resolver";

@Module({
  imports: [PersonalAssistanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PersonalAssistanceController],
  providers: [PersonalAssistanceService, PersonalAssistanceResolver],
  exports: [PersonalAssistanceService],
})
export class PersonalAssistanceModule {}

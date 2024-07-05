import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalAssistanceServiceBase } from "./base/personalAssistance.service.base";

@Injectable()
export class PersonalAssistanceService extends PersonalAssistanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

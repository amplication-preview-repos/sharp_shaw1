import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudyMaterialServiceBase } from "./base/studyMaterial.service.base";

@Injectable()
export class StudyMaterialService extends StudyMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CourseRecommendationService } from "./courserecommendation.service";

@swagger.ApiTags("courseRecommendations")
@common.Controller("courseRecommendations")
export class CourseRecommendationController {
  constructor(protected readonly service: CourseRecommendationService) {}
}

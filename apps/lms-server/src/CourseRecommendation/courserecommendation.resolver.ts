import * as graphql from "@nestjs/graphql";
import { CourseRecommendationService } from "./courserecommendation.service";

export class CourseRecommendationResolver {
  constructor(protected readonly service: CourseRecommendationService) {}
}

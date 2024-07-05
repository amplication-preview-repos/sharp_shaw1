import { Module } from "@nestjs/common";
import { CourseRecommendationService } from "./courserecommendation.service";
import { CourseRecommendationController } from "./courserecommendation.controller";
import { CourseRecommendationResolver } from "./courserecommendation.resolver";

@Module({
  controllers: [CourseRecommendationController],
  providers: [CourseRecommendationService, CourseRecommendationResolver],
  exports: [CourseRecommendationService],
})
export class CourseRecommendationModule {}

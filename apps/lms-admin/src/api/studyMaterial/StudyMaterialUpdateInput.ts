import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseUpdateManyWithoutStudyMaterialsInput } from "./CourseUpdateManyWithoutStudyMaterialsInput";
import { InputJsonValue } from "../../types";

export type StudyMaterialUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  courses?: CourseUpdateManyWithoutStudyMaterialsInput;
  description?: string | null;
  file?: InputJsonValue;
  title?: string | null;
};

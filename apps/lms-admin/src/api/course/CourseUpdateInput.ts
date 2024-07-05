import { StudyMaterialWhereUniqueInput } from "../studyMaterial/StudyMaterialWhereUniqueInput";
import { StudyMaterialUpdateManyWithoutCoursesInput } from "./StudyMaterialUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  description?: string | null;
  studyMaterial?: StudyMaterialWhereUniqueInput | null;
  studyMaterials?: StudyMaterialUpdateManyWithoutCoursesInput;
  title?: string | null;
};

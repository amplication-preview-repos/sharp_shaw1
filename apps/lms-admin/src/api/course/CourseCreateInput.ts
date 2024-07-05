import { StudyMaterialWhereUniqueInput } from "../studyMaterial/StudyMaterialWhereUniqueInput";
import { StudyMaterialCreateNestedManyWithoutCoursesInput } from "./StudyMaterialCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  description?: string | null;
  studyMaterial?: StudyMaterialWhereUniqueInput | null;
  studyMaterials?: StudyMaterialCreateNestedManyWithoutCoursesInput;
  title?: string | null;
};

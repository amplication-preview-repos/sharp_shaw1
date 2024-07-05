import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseCreateNestedManyWithoutStudyMaterialsInput } from "./CourseCreateNestedManyWithoutStudyMaterialsInput";
import { InputJsonValue } from "../../types";

export type StudyMaterialCreateInput = {
  course?: CourseWhereUniqueInput | null;
  courses?: CourseCreateNestedManyWithoutStudyMaterialsInput;
  description?: string | null;
  file?: InputJsonValue;
  title?: string | null;
};

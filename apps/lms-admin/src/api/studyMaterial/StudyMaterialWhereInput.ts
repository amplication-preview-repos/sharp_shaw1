import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudyMaterialWhereInput = {
  course?: CourseWhereUniqueInput;
  courses?: CourseListRelationFilter;
  description?: StringNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};

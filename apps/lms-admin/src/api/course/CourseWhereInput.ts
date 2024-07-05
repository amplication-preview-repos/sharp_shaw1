import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudyMaterialWhereUniqueInput } from "../studyMaterial/StudyMaterialWhereUniqueInput";
import { StudyMaterialListRelationFilter } from "../studyMaterial/StudyMaterialListRelationFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  studyMaterial?: StudyMaterialWhereUniqueInput;
  studyMaterials?: StudyMaterialListRelationFilter;
  title?: StringNullableFilter;
};

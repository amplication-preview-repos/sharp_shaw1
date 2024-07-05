import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonalAssistanceListRelationFilter } from "../personalAssistance/PersonalAssistanceListRelationFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  personalAssistances?: PersonalAssistanceListRelationFilter;
};

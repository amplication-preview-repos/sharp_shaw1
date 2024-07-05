import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PersonalAssistanceWhereInput = {
  assistanceType?: "Option1";
  details?: StringNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};

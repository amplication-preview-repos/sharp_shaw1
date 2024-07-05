import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PersonalAssistanceUpdateInput = {
  assistanceType?: "Option1" | null;
  details?: string | null;
  student?: StudentWhereUniqueInput | null;
};

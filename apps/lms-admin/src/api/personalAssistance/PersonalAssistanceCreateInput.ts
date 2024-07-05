import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PersonalAssistanceCreateInput = {
  assistanceType?: "Option1" | null;
  details?: string | null;
  student?: StudentWhereUniqueInput | null;
};

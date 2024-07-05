import { PersonalAssistanceUpdateManyWithoutStudentsInput } from "./PersonalAssistanceUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  name?: string | null;
  personalAssistances?: PersonalAssistanceUpdateManyWithoutStudentsInput;
};

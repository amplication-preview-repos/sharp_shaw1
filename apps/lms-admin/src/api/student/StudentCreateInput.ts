import { PersonalAssistanceCreateNestedManyWithoutStudentsInput } from "./PersonalAssistanceCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  name?: string | null;
  personalAssistances?: PersonalAssistanceCreateNestedManyWithoutStudentsInput;
};

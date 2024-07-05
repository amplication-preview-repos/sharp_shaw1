import { PersonalAssistanceWhereInput } from "./PersonalAssistanceWhereInput";
import { PersonalAssistanceOrderByInput } from "./PersonalAssistanceOrderByInput";

export type PersonalAssistanceFindManyArgs = {
  where?: PersonalAssistanceWhereInput;
  orderBy?: Array<PersonalAssistanceOrderByInput>;
  skip?: number;
  take?: number;
};

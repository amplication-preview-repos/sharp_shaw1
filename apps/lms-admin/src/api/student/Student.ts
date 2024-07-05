import { PersonalAssistance } from "../personalAssistance/PersonalAssistance";

export type Student = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  personalAssistances?: Array<PersonalAssistance>;
  updatedAt: Date;
};

import { Student } from "../student/Student";

export type PersonalAssistance = {
  assistanceType?: "Option1" | null;
  createdAt: Date;
  details: string | null;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};

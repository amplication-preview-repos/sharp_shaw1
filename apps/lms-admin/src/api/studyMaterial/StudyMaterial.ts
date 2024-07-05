import { Course } from "../course/Course";
import { JsonValue } from "type-fest";

export type StudyMaterial = {
  course?: Course | null;
  courses?: Array<Course>;
  createdAt: Date;
  description: string | null;
  file: JsonValue;
  id: string;
  title: string | null;
  updatedAt: Date;
};

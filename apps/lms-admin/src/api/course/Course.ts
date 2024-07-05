import { StudyMaterial } from "../studyMaterial/StudyMaterial";

export type Course = {
  createdAt: Date;
  description: string | null;
  id: string;
  studyMaterial?: StudyMaterial | null;
  studyMaterials?: Array<StudyMaterial>;
  title: string | null;
  updatedAt: Date;
};

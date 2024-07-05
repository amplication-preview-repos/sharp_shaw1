import { StudyMaterial as TStudyMaterial } from "../api/studyMaterial/StudyMaterial";

export const STUDYMATERIAL_TITLE_FIELD = "title";

export const StudyMaterialTitle = (record: TStudyMaterial): string => {
  return record.title?.toString() || String(record.id);
};

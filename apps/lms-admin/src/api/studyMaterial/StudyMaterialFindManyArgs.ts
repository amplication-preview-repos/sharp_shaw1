import { StudyMaterialWhereInput } from "./StudyMaterialWhereInput";
import { StudyMaterialOrderByInput } from "./StudyMaterialOrderByInput";

export type StudyMaterialFindManyArgs = {
  where?: StudyMaterialWhereInput;
  orderBy?: Array<StudyMaterialOrderByInput>;
  skip?: number;
  take?: number;
};

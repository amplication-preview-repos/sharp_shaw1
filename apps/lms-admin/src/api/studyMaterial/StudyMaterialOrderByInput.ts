import { SortOrder } from "../../util/SortOrder";

export type StudyMaterialOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

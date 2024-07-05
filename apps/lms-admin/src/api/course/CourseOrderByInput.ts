import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  studyMaterialId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

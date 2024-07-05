import { SortOrder } from "../../util/SortOrder";

export type PersonalAssistanceOrderByInput = {
  assistanceType?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};

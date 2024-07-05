import { PersonalAssistance as TPersonalAssistance } from "../api/personalAssistance/PersonalAssistance";

export const PERSONALASSISTANCE_TITLE_FIELD = "id";

export const PersonalAssistanceTitle = (
  record: TPersonalAssistance
): string => {
  return record.id?.toString() || String(record.id);
};

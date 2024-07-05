import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChatMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Message" multiline source="message" />
        <TextInput label="Sender" source="sender" />
        <DateTimeInput label="Timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};

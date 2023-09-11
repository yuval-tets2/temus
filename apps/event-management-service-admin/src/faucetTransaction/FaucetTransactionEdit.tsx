import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const FaucetTransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Completed At" source="completedAt" />
        <TextInput label="Email" source="email" />
        <TextInput label="Hash" source="hash" />
        <TextInput label="Public Key" source="publicKey" />
        <DateTimeInput label="Started At" source="startedAt" />
        <NumberInput step={1} label="Tries" source="tries" />
      </SimpleForm>
    </Edit>
  );
};

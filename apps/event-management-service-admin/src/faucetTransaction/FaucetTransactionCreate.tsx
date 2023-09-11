import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const FaucetTransactionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Completed At" source="completedAt" />
        <TextInput label="Email" source="email" />
        <TextInput label="Hash" source="hash" />
        <TextInput label="Public Key" source="publicKey" />
        <DateTimeInput label="Started At" source="startedAt" />
        <NumberInput step={1} label="Tries" source="tries" />
      </SimpleForm>
    </Create>
  );
};

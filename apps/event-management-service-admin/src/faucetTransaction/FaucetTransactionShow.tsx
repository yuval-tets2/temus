import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FaucetTransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Completed At" source="completedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Hash" source="hash" />
        <TextField label="Id" source="id" />
        <TextField label="Public Key" source="publicKey" />
        <TextField label="Started At" source="startedAt" />
        <TextField label="Tries" source="tries" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

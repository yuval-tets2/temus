import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VersionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Version" source="version" />
      </SimpleForm>
    </Create>
  );
};

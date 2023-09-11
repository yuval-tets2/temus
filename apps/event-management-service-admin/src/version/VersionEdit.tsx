import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VersionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Version" source="version" />
      </SimpleForm>
    </Edit>
  );
};

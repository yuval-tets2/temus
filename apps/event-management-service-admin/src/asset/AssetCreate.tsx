import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";
import { AssetDescriptionTitle } from "../assetDescription/AssetDescriptionTitle";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="createdTransaction.id"
          reference="Transaction"
          label="Created Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="descriptions"
          reference="AssetDescription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetDescriptionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Identifier" source="identifier" />
        <TextInput label="Metadata" source="metadata" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <NumberInput step={1} label="Supply" source="supply" />
        <DateTimeInput label="Verified At" source="verifiedAt" />
      </SimpleForm>
    </Create>
  );
};

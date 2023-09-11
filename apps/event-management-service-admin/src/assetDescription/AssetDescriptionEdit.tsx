import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { AssetTitle } from "../asset/AssetTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AssetDescriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "BURN", value: "BURN" },
            { label: "MINT", value: "MINT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};

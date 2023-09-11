import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AssetDescriptionTitle } from "../assetDescription/AssetDescriptionTitle";
import { BlockTransactionTitle } from "../blockTransaction/BlockTransactionTitle";
import { AssetTitle } from "../asset/AssetTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assetDescriptions"
          reference="AssetDescription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetDescriptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="blocksTransactions"
          reference="BlockTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlockTransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="createdAssets"
          reference="Asset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Expiration" source="expiration" />
        <NumberInput label="Fee" source="fee" />
        <TextInput label="Hash" source="hash" />
        <NumberInput step={1} label="Network Version" source="networkVersion" />
        <div />
        <NumberInput step={1} label="Size" source="size" />
        <div />
      </SimpleForm>
    </Create>
  );
};

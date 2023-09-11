import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BlockTitle } from "../block/BlockTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const BlockTransactionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="block.id" reference="Block" label="Block">
          <SelectInput optionText={BlockTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Index" source="index" />
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

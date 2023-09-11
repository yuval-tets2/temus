import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BlockTitle } from "../block/BlockTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const BlockTransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLOCK_TITLE_FIELD } from "./BlockTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const BlockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Difficulty" source="difficulty" />
        <TextField label="Graffiti" source="graffiti" />
        <TextField label="Hash" source="hash" />
        <TextField label="Id" source="id" />
        <BooleanField label="Main" source="main" />
        <TextField label="Network Version" source="networkVersion" />
        <TextField label="Previous Block Hash" source="previousBlockHash" />
        <TextField label="Sequence" source="sequence" />
        <TextField label="Size" source="size" />
        <TextField
          label="Time Since Last Block Ms"
          source="timeSinceLastBlockMs"
        />
        <TextField label="Timestamp" source="timestamp" />
        <TextField label="Transactions Count" source="transactionsCount" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Work" source="work" />
        <ReferenceManyField
          reference="BlockTransaction"
          target="block_id"
          label="BlockTransactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Block" source="block.id" reference="Block">
              <TextField source={BLOCK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Index" source="index" />
            <ReferenceField
              label="Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

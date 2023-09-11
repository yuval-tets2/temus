import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { TRANSACTION_TITLE_FIELD } from "./TransactionTitle";
import { BLOCK_TITLE_FIELD } from "../block/BlockTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expiration" source="expiration" />
        <TextField label="Fee" source="fee" />
        <TextField label="Hash" source="hash" />
        <TextField label="Id" source="id" />
        <TextField label="Network Version" source="networkVersion" />
        <TextField label="Notes" source="notes" />
        <TextField label="Size" source="size" />
        <TextField label="Spends" source="spends" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AssetDescription"
          target="transaction_id"
          label="AssetDescriptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BlockTransaction"
          target="transaction_id"
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
        <ReferenceManyField
          reference="Asset"
          target="created_transaction_id"
          label="Assets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Identifier" source="identifier" />
            <TextField label="Metadata" source="metadata" />
            <TextField label="Name" source="name" />
            <TextField label="Owner" source="owner" />
            <TextField label="Supply" source="supply" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Verified At" source="verifiedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

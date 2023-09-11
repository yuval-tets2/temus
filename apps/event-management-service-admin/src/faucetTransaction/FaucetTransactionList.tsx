import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FaucetTransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FaucetTransactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Completed At" source="completedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Hash" source="hash" />
        <TextField label="Id" source="id" />
        <TextField label="Public Key" source="publicKey" />
        <TextField label="Started At" source="startedAt" />
        <TextField label="Tries" source="tries" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

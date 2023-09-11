import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

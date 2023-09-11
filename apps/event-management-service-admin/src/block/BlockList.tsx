import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BlockList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Blocks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

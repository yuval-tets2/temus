import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BlockDailyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BlockDailies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Average Block Size" source="averageBlockSize" />
        <TextField label="Average Block Time Ms" source="averageBlockTimeMs" />
        <TextField label="Average Difficulty" source="averageDifficulty" />
        <TextField label="Blocks Count" source="blocksCount" />
        <TextField
          label="Blocks With Graffiti Count"
          source="blocksWithGraffitiCount"
        />
        <TextField label="Chain Sequence" source="chainSequence" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="Cumulative Unique Graffiti"
          source="cumulativeUniqueGraffiti"
        />
        <TextField label="Date" source="date" />
        <TextField label="Id" source="id" />
        <TextField label="Transactions Count" source="transactionsCount" />
        <TextField label="Unique Graffiti Count" source="uniqueGraffitiCount" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

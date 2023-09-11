import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { BlockTransactionTitle } from "../blockTransaction/BlockTransactionTitle";

export const BlockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="blocksTransactions"
          reference="BlockTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlockTransactionTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Difficulty" source="difficulty" />
        <TextInput label="Graffiti" source="graffiti" />
        <TextInput label="Hash" source="hash" />
        <BooleanInput label="Main" source="main" />
        <NumberInput step={1} label="Network Version" source="networkVersion" />
        <TextInput label="Previous Block Hash" source="previousBlockHash" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <NumberInput step={1} label="Size" source="size" />
        <NumberInput
          step={1}
          label="Time Since Last Block Ms"
          source="timeSinceLastBlockMs"
        />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <NumberInput
          step={1}
          label="Transactions Count"
          source="transactionsCount"
        />
        <NumberInput label="Work" source="work" />
      </SimpleForm>
    </Edit>
  );
};

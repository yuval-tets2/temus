import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const BlockDailyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Average Block Size" source="averageBlockSize" />
        <NumberInput
          step={1}
          label="Average Block Time Ms"
          source="averageBlockTimeMs"
        />
        <NumberInput label="Average Difficulty" source="averageDifficulty" />
        <NumberInput step={1} label="Blocks Count" source="blocksCount" />
        <NumberInput
          step={1}
          label="Blocks With Graffiti Count"
          source="blocksWithGraffitiCount"
        />
        <NumberInput step={1} label="Chain Sequence" source="chainSequence" />
        <NumberInput
          step={1}
          label="Cumulative Unique Graffiti"
          source="cumulativeUniqueGraffiti"
        />
        <DateTimeInput label="Date" source="date" />
        <NumberInput
          step={1}
          label="Transactions Count"
          source="transactionsCount"
        />
        <NumberInput
          step={1}
          label="Unique Graffiti Count"
          source="uniqueGraffitiCount"
        />
      </SimpleForm>
    </Edit>
  );
};

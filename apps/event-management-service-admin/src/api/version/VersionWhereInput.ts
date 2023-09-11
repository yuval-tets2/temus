import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type VersionWhereInput = {
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  version?: StringFilter;
};

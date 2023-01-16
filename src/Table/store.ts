import { Dispatch, SetStateAction } from "react";

export interface TableHead {
  label: string;
  column: string;
}
export interface TableData {
  [key: string]: string;
}
export interface IElement {
  value: string;
  column: string;
  index: number;
}
export interface IError {
  index: number;
  column: string;
  message:string;
}
export interface ITableRow {
  element: any;
  header: TableHead[];
  index: number;
  handleChange: ({ value, column, index }: IElement) => void;
  setError: Dispatch<
    SetStateAction<IError[]>
  >;
}

export interface ITable {
  dataCell: TableData[];
  header: TableHead[];
  handleChange: ({ value, column, index }: IElement) => void;
  setError: Dispatch<
    SetStateAction<IError[]>
  >
}
export let dataCell: any = [
  {
    column1: "$0.5",
    column2: "$0.2",
    column3: "$0.4",
    column4: "$0.4",
  },
  {
    column1: "$0.4",
    column2: "$0.4",
    column3: "$0.42",
    column4: "$0.3",
  },
  {
    column1: "$0.4",
    column2: "$0.4",
    column3: "$0.4",
    column4: "$0.4",
  },
  {
    column1: "$0.4",
    column2: "$0.4",
    column3: "$0.4",
    column4: "$0.4",
  },
  {
    column1: "$0.4",
    column2: "$0.4",
    column3: "$0.4",
    column4: "$0.4",
  },
];
export const header = [
  {
    label: "Column 1",
    column: "column1",
  },
  {
    label: "Column 2",
    column: "column2",
  },
  {
    label: "Column 3",
    column: "column3",
  },
  {
    label: "Column 4",
    column: "column4",
  },
];

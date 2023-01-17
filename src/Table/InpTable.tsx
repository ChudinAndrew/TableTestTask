import { FC, useState } from "react";
import Table from "./components/Table";
import { IError, TableData, TableHead } from "./store";
import { ButtonWrapper, ContentWrapper, Error, TableWrapper } from "./style";

const InpTable: FC<{
  dataCell: TableData[];
  header: TableHead[];
}> = ({ dataCell, header }) => {
  const [table, setTable] = useState<TableData[]>(dataCell);
  const [error, setError] = useState<IError[]>([]);
  const handleChange = (value: any) => {
    setTable((state) => [
      ...state.slice(0, value.index),
      { ...state[value.index], [value.column]: value.value },
      ...state.slice(value.index + 1),
    ]);
  };

  return (
    <TableWrapper>
      <ContentWrapper>
        <div>
          <Table
            dataCell={table}
            header={header}
            handleChange={handleChange}
            setError={setError}
          />
        </div>
      </ContentWrapper>
      {!error.length && (
        <ButtonWrapper>
          <button
            className="btn"
            onClick={() => {
              console.log(table);
            }}
          >
            Show result
          </button>
        </ButtonWrapper>
      )}
      {error.length > 0 && (
        <Error>
          {error.map(({ message }, index) => (
            <div key={index} className="err">
              {message}!{" "}
            </div>
          ))}
        </Error>
      )}
    </TableWrapper>
  );
};
export default InpTable;

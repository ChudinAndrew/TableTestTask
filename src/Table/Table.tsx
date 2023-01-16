import { FC, useState } from "react";
import { IError, ITable, ITableRow, TableData, TableHead } from "./store";
import {
  ButtonWrapper,
  ContentWrapper,
  Error,
  HeaderWrapper,
  InputWrapper,
  TableWrapper,
} from "./style";

const TableRow: FC<ITableRow> = ({
  element,
  header,
  handleChange,
  index,
  setError,
}) => {
  const regEx = /^\$([1-9]\d*\.\d{1,2}|0\.\d{1,2}|[1-9]\d*)$/;
  return (
    <>
      {header.map(({ column }) => {
        return (
          <>
            <input
              type="text"
              value={element[column]}
              onChange={({ target: { value } }) => {
                if (value.indexOf("$") === 0) {
                  handleChange({ value, column, index });
                  const err = regEx.test(value);

                  if (!err) {
                    setError((state) => {
                      if (
                        state.findIndex(
                          (item) => item.column === `${column}${index + 1}`
                        ) < 0
                      )
                        return [
                          ...state,
                          {
                            index,
                            column: `${column}${index + 1}`,
                            message: `Invalid value in ${column} row ${
                              index + 1
                            }`,
                          },
                        ];
                      else return [...state];
                    });
                  } else {
                    setError((state) => [
                      ...state.filter(
                        (elem) => elem.column !== `${column}${index + 1}`
                      ),
                    ]);
                  }
                }
              }}
            />
          </>
        );
      })}
    </>
  );
};
const Table: FC<ITable> = ({ dataCell, header, handleChange, setError }) => {
  return (
    <>
      <HeaderWrapper>
        {header.map(({ label }) => (
          <div className="lbl">{label}</div>
        ))}
      </HeaderWrapper>
      <InputWrapper>
        {dataCell.map((element: TableData, index: number) => (
          <TableRow
            index={index}
            element={element}
            header={header}
            handleChange={handleChange}
            setError={setError}
          />
        ))}
      </InputWrapper>
    </>
  );
};

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
          {error.map(({ message }) => (
            <div className="err">{message}! </div>
          ))}
        </Error>
      )}
    </TableWrapper>
  );
};
export default InpTable;

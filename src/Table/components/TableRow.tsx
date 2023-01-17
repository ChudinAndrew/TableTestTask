import { FC } from "react";
import { ITableRow } from "../store";
import { TableInput } from "../style";

const TableRow: FC<ITableRow> = ({
  element,
  header,
  handleChange,
  index,
  setError,
  validate,
}) => {
  return (
    <>
      {header.map(({ column }) => {
        return (
          <TableInput
            key={column}
            type="text"
            value={element[column]}
            onChange={({ target: { value } }) => {
              // if (value.indexOf("$") === 0) {
              handleChange({ value, column, index });
              const err = validate.test(value);

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
                        message: `Invalid value in ${column} row ${index + 1}`,
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
            }}
            // }
          />
        );
      })}
    </>
  );
};
export default TableRow;

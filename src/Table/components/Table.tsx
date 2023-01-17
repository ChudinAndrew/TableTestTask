import { FC } from "react";
import { ITable, TableData } from "../store";
import { HeaderWrapper, RowWrap, TableWrapperTest } from "../style";
import TableRow from "./TableRow";

const Table: FC<ITable> = ({ dataCell, header, handleChange, setError }) => {
  let regEx = /^\$([1-9]\d*\.\d{1,2}|0\.\d{1,2}|[1-9]\d*)$/;
  return (
    <TableWrapperTest>
      <HeaderWrapper>
        {header.map(({ label }, index) => (
          <div key={index} className="lbl">
            {label}
          </div>
        ))}
      </HeaderWrapper>
      {dataCell.map((element: TableData, index: number) => (
        <RowWrap key={index.toString()}>
          <div className="numb">{index + 1}</div>
          <TableRow
            index={index}
            element={element}
            header={header}
            handleChange={handleChange}
            setError={setError}
            validate={regEx}
          />
        </RowWrap>
      ))}
    </TableWrapperTest>
  );
};
export default Table;

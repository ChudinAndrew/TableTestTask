import { FC, useState } from "react";
import { CustomInput, Names, SelectWrapper } from "./styles";

const Select: FC<{ data: any }> = ({ data }: any) => {
  let [active, setActive] = useState(false);
  let [inputValue, setInpuValue] = useState("");
  let [dataArr, setDataArr] = useState(data);

  return (
    <SelectWrapper>
      <CustomInput
        placeholder="Select name"
        type="text"
        value={inputValue}
        onClick={() => {
          setActive(true);
        }}
        onChange={({ target: { value } }) => {
          setInpuValue(value);
          setDataArr(
            data.filter((el: any) =>
              el.toLowerCase().includes(value.toLowerCase())
            )
          );
        }}
      />

      {active && (
        <Names>
          {dataArr.map((element: any) => (
            // console.log(element)
            <span
              onClick={() => {
                setActive(false);
                setInpuValue(element);
              }}
              key={element}
            >
              {element}
            </span>
          ))}
        </Names>
      )}
    </SelectWrapper>
  );
};

export default Select;

import "./App.css";
import { dataCell, header } from "./Table/store";
import InpTable from "./Table/InpTable";
import Select from "./Select/Select";
import { data } from "./Select/store";

function App() {
  return (
    <>
      {/* <InpTable header={header} dataCell={dataCell} /> */}
      <Select data={data}/>
    </>
  );
}

export default App;

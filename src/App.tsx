import "./App.css";
import { dataCell, header } from "./Table/store";
import InpTable from "./Table/InpTable";

function App() {
  return (
    <>
      <InpTable header={header} dataCell={dataCell} />
    </>
  );
}

export default App;

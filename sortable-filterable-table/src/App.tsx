import "./App.css";
import { Table } from "/components/Table";
import { data } from "./data/data";

function App() {
  return (
    <>
      <Table rows={data} />
    </>
  );
}

export default App;

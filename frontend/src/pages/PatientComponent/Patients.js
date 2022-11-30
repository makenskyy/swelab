import Table from "./Table";
import Navbar from "../../Navbar";
const specializations = [
  { id: 1, name: "type1", doctorID: "1" },
  { id: 2, name: "type2", doctorID: "2" },
  { id: 3, name: "type3", doctorID: "3" },
  { id: 4, name: "type4", doctorID: "4" },
  { id: 5, name: "type5", doctorID: "5" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem", backgroundColor: "#EDEFF0", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table />
        </div>
      </div>
      {/* <h1>Welcome to the page</h1> */}
      {/* <CustomTable /> */}
    </>
  );
}

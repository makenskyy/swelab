import Table from "./Table";
// import Navbar from "../../Navbar";
import Navbar from "../../Navbar";

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

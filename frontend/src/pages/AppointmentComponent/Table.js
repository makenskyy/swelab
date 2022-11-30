import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

import axios from "axios";
const baseUrl = "/admin/appointments";
const base = "http://localhost:8000";

const columns = [
  { id: "patientName", label: "Patient Name", minWidth: 170 },
  { id: "doctorName", label: "Specialization Name", minWidth: 170 },
  {
    id: "approved",
    label: "Status",
    minWidth: 170,
    // align: "right",
  },
  {
    id: "patientContact",
    label: "Patient contact",
    minWidth: 170,
    // align: "right",
  },
];

// rows = [createData(1, "Myrza", 2), createData(1, "Myrza", 2), createData(1, "Myrza", 2), createData(1, "Myrza", 2)];

function createData(id, name, _id) {
  return { id, name, _id };
}

// const rows = [];

// axios.get(baseUrl).then((response) => {
//   response.data?.data?.map((each) => rows.push(createData(each.id, each.name, each._id)));
// });

export default function StickyHeadTable() {
  const [rows, setRows] = React.useState(null);
  React.useEffect(() => {
    const request = async () => {
      const response = await axios.get(`http://localhost:8000/admin/appointments`);
      const promises = [];
      promises.push(response);
      const appointments = await Promise.all(promises);
      const rowData = appointments.map((appointment) => appointment.data.data.appointments);
      setRows(rowData[0]);
    };
    request();
  }, []);
  console.log(rows);
  return (
    <Paper sx={{ width: "50%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length > 0 &&
              rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                          {column.id == "approved" ? (
                            <TableCell key={column.id} align={column.align}>
                              <Link to={baseUrl + "/" + row[column.id]} className="site-title" style={{ textDecoration: "none", fontSize: "10px" }}>
                                {column.id === true ? "Yes" : "No"}
                              </Link>
                            </TableCell>
                          ) : (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number" ? column.format(value) : value}
                            </TableCell>
                          )}
                        </>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

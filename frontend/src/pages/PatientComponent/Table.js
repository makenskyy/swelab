import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
const baseUrl = "/admin/specializations";
const base = "http://localhost:8000";

const columns = [
  { id: "first_name", label: "First Name", minWidth: 170 },
  { id: "last_name", label: "Last Name", minWidth: 100 },
  {
    id: "contact_number",
    label: "Contact Number",
    minWidth: 170,
    // align: "right",
  },
  { id: "IINnumber", label: "IIN number", minWidth: 170 },
  { id: "IDnumber", label: "ID number", minWidth: 170 },
  { id: "departmentID", label: "Department ID", minWidth: 170 },
  { id: "category", label: "Category", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 170 },
  { id: "education", label: "Education", minWidth: 170 },
  { id: "rating", label: "Rating", minWidth: 170 },
  { id: "address", label: "Address", minWidth: 170 },
];

// rows = [createData(1, "Myrza", 2), createData(1, "Myrza", 2), createData(1, "Myrza", 2), createData(1, "Myrza", 2)];

function createData(first_name, last_name, contact_number, IINnumber, IDnumber, departmentID, category, price, education, rating, address) {
  return { first_name, last_name, contact_number, IINnumber, IDnumber, departmentID, category, price, education, rating, address };
}

// const rows = [];

// axios.get(baseUrl).then((response) => {
//   response.data?.data?.map((each) => rows.push(createData(each.id, each.name, each._id)));
// });

export default function StickyHeadTable() {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    const request = async () => {
      const response = await axios.get(`http://localhost:8000/admin/patients`);
      const promises = [];
      promises.push(response);
      const patients = await Promise.all(promises);
      setRows(patients[0].data.data);
    };
    request();
  }, []);
  console.log(rows);
  return (
    <>
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
              {rows.length > 0 &&
                rows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <>
                            {column.id == "_id" ? (
                              <TableCell key={column.id} align={column.align}>
                                <Link to={baseUrl + "/" + row[column.id]} className="site-title" style={{ textDecoration: "none", fontSize: "10px" }}>
                                  {row[column.id]}
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
    </>
  );
}

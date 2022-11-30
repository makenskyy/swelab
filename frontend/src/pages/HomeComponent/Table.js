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
const baseUrl = "/admin/specializations";
const base = "http://localhost:8000";

const columns = [
  { id: "id", label: "Specialization ID", minWidth: 170 },
  { id: "name", label: "Specialization Name", minWidth: 100 },
  {
    id: "_id",
    label: "Doctors",
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
    axios
      .get(`${base}${baseUrl}`)
      .then((response) => {
        setRows(response.data.data);

        // response.data?.data?.map((each) => setRows((rows) => [...rows, { id: each.id, name: each.name, _id: each._id }]));
        // rows.push({ id: response.data?.data?.id, name: response.data?.data?.name, _id: response.data?.data?._id });
        // console.log(rows);
        // setRows([...rows, { id: response.data.id, name: response.data.name, _id: response.data._id }]);
        // setRows(createData(response.data?.id, response.data?.name, response.data?._id));
      })
      .catch((err) => console.log(err));
  }, []);
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
  );
}

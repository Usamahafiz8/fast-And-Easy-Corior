import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox"; // Import Checkbox from Material-UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { UPaper } from "./Upaper";
import { UHeading1 } from "./Uheading";
import { Button } from "@mui/material";

function createData(
  name: string,
  email: string,
  fat: number,
  protein: number,
  price: string
) {
  return {
    name,
    email,
    fat,
    protein,
    price,
  };
}

function Row(props: {
  row: ReturnType<typeof createData>;
  isSelected: boolean;
  onRowSelect: Function;
  arrowVisible: boolean;
}) {
  const { row, isSelected, onRowSelect, arrowVisible } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          {/* Conditionally render the arrow icon or checkbox based on visibility state */}
          {arrowVisible ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : (
            <Checkbox
              color="primary"
              checked={isSelected}
              onChange={() => onRowSelect(row)}
            />
          )}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <UHeading1 styles={{ fontSize: 16 }}>Address:</UHeading1>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
              ></Typography>
              Address information in detail
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Frozen yoghurt", "yoghurt@gmail.com", 24, 4.0, "InHouse"),
  createData("Ice cream sandwich", "sandwich@gmail.com", 37, 4.3, "InHouse"),
  createData("Eclair", "Eclair@gmail.com", 24, 6.0, "In wareHouse"),
  createData("Cupcake", "Cupcake@gmail.com", 67, 4.3, "InHouse"),
  createData("Gingerbread", "Gingerbread@gmail.com", 49, 3.9, "Dilvered"),
];

export default function ShowParcelDetailTable() {
  const [arrowVisible, setArrowVisible] = React.useState(true); // State to toggle between arrow and checkbox visibility
  const [selectedRows, setSelectedRows] = React.useState([]);

  // Function to handle row selection
  const handleRowSelection = (row: any) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow !== row)
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  // Function to show the selected row information
  const handleShowData = () => {
    // Implement your logic to display the selected row information
    console.log(selectedRows);
  };

  return (
    <React.Fragment>
      <TableContainer component={UPaper}>
        <div style={{ display: "flex", flexDirection: "row-reverse" , gap:16 }}>
          <Button onClick={() => setArrowVisible(!arrowVisible)} variant="contained">
            {arrowVisible ? "Select Parcel to Generate Invioce" : "Cancel"}
          </Button>
          {!arrowVisible &&  <Button onClick={handleShowData} variant="outlined">Generate Data</Button>}
        </div>
        {/* Button to toggle arrow/checkbox visibility */}

        {/* Rest of your code... */}
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <UHeading1 styles={{ fontSize: 16 }}>Name</UHeading1>
              </TableCell>
              <TableCell align="left">
                <UHeading1 styles={{ fontSize: 16 }}>Email</UHeading1>
              </TableCell>
              <TableCell align="right">
                <UHeading1 styles={{ fontSize: 16 }}>Weight (g)</UHeading1>
              </TableCell>
              <TableCell align="right">
                <UHeading1 styles={{ fontSize: 16 }}>Price (PKR)</UHeading1>
              </TableCell>
              <TableCell align="right">
                <UHeading1 styles={{ fontSize: 16 }}>Status</UHeading1>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.name}
                row={row}
                isSelected={selectedRows.includes(row)}
                onRowSelect={handleRowSelection}
                arrowVisible={arrowVisible} // Pass arrow visibility as a prop
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

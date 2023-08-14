import CustomerNavbar from "../../../components/CustomerNabar"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { UPaper } from "../../../components/Upaper";
import { UHeading1 } from "../../../components/Uheading";

export const Profile = () => {
  return (
    <>
    <CustomerNavbar/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UPaper
        styles={{
          minWidth: "400px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <UHeading1>Profile</UHeading1>
        <Divider />
        <TextField fullWidth disabled label="Full Name" />
        <TextField fullWidth disabled label="Email" />
        <TextField fullWidth disabled label="Contact no." />
        <TextField fullWidth disabled label="Password" />
        <Button disabled fullWidth variant="contained">
          Update Profile
        </Button>
      </UPaper>
    </div>
    </>
  )
}

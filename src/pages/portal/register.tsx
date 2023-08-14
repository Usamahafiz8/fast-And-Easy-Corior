import TextField from "@mui/material/TextField";
import { UHeading1, UHeading3 } from "../../components/Uheading";
import { UPaper } from "../../components/Upaper";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

export const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
        <UHeading1>Register</UHeading1>
        <TextField fullWidth label="Full Name" />
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Contact no." />
        <TextField fullWidth label="Password" />
        <TextField fullWidth label="Confirm Password" />
        <Button fullWidth variant="contained">
          Register
        </Button>
        <Divider />
        <UHeading3>
          Already have and account?
          <Button>Login</Button>
        </UHeading3>
      </UPaper>
    </div>
  );
};

import TextField from "@mui/material/TextField";
import { UHeading1, UHeading3 } from "../../components/Uheading";
import { UPaper } from "../../components/Upaper";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
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
          minWidth: "350px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <UHeading1>Login</UHeading1>
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Password" />
        <Button fullWidth variant="contained">
          login
        </Button>
        <Divider />
        <UHeading3>
          Don't have an account?
          <Button>Create an Account</Button>
        </UHeading3>
        <Button fullWidth variant="contained" onClick={()=>{navigate('/dashboard')}}>
          Customer Side
        </Button> <Button fullWidth variant="contained" onClick={()=>{navigate('/mainboard')}} >
          Admin Side 
        </Button>
      </UPaper>
    </div>
  );
};

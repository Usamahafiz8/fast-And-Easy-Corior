import { UPaper } from './Upaper'
import { Button, Divider, Grid, TextField } from '@mui/material'
import { UHeading1 } from './Uheading'

export const ParcelRegistration = () => {
  return (
    <>
          <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        // height={"100vh"}
        marginTop={'30px'}
      >
        <UPaper
          styles={{
            minWidth: "900px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <UHeading1
            styles={{
              textAlign: "center",
            }}
          >
            Register Parcel
          </UHeading1>
            <Divider />
          <Grid container >
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding:8
            }}
            >
            <UHeading1 styles={{ fontSize: 16 }}>Reciver Information</UHeading1>
              <TextField fullWidth label="Reciver Full Name" />
              <TextField fullWidth label="Email" />
              <TextField fullWidth label="Contact no." />
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{  display: "flex",
              flexDirection: "column",
              padding:8,
              gap: 16,}}
            >
                 <UHeading1 styles={{ fontSize: 16 }}>Parcel Information</UHeading1>
              <TextField fullWidth label="Weight (g)" />
              <TextField fullWidth label="Total Payment" />
              <TextField fullWidth label="Payment Recived" />
            </Grid>
          </Grid>
          <Divider />
          <UHeading1 styles={{ fontSize: 16 }}>Address</UHeading1>
          <TextField fullWidth label="Street" />
          <TextField fullWidth label="Aera" />
          <TextField fullWidth label="City" />
          <TextField fullWidth label="Country" />
          <Button fullWidth variant="contained">
            Register
          </Button>
        </UPaper>
      </Grid>
      </>
  )
}

import { Grid } from "@mui/material";
import CustomerNavbar from "../../../components/CustomerNabar";
import { UPaper } from "../../../components/Upaper";
import { UHeading1, UHeading2 } from "../../../components/Uheading";
import ShowParcelDetailTable from "../../../components/ShowParcel";

export const CustomerDashboard = () => {
  return (
    <>
      <CustomerNavbar />
      <Grid
        container
        justifyContent={"center"}
        style={{ padding: " 0 64px 0 64px" }}
      >
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} style={{ padding: 8 }}>
          <UPaper>
            <UHeading1>
              Welcome <i>Muhammad Osama!</i>
            </UHeading1>
          </UPaper>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          md={3}
          sm={12}
          xs={12}
          style={{ padding: 8, height: "96px" }}
        >
          <UPaper styles={{ display: "flex", justifyContent: "space-between" }}>
            <UHeading2 styles={{fontSize: 18, fontWeight: 600,}}>Parcel Registered</UHeading2>
            <UHeading2>55</UHeading2>
          </UPaper>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={12} xs={12} style={{ padding: 8 }}>
          <UPaper styles={{ display: "flex", justifyContent: "space-between" }}>
            <UHeading2 styles={{fontSize: 18, fontWeight: 600, }}>Paymnet Collection</UHeading2>
            <UHeading2>10,000</UHeading2>
          </UPaper>
        </Grid>

        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ padding: 8 }}
        >
          <UPaper>
            <UHeading2
              styles={{ fontSize: 18, fontWeight: 600, marginBottom: "16px" }}
            >
              Parcel information
            </UHeading2>
            <ShowParcelDetailTable />
          </UPaper>
        </Grid>
      </Grid>
    </>
  );
};

import CustomerNavbar from "../../../components/CustomerNabar";
import ShowParcelDetailTable from "../../../components/ShowParcel";
import { UHeading1 } from "../../../components/Uheading";

export const ShowParcel = () => {
  return (
    <>
      <CustomerNavbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "90%" }}>
          <UHeading1
            styles={{
              marginBottom: 30,
            }}
          >
            Parcel Information
          </UHeading1>
          <ShowParcelDetailTable />
        </div>
      </div>
    </>
  );
};

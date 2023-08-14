import {Typography} from "@mui/material";
import React from "react";

type THeadingProps = {
    children?: React.ReactNode
    styles?: { [style: string]: string | number }

}


const UHeading1 = ({children, styles}: THeadingProps) => <Typography variant={"h5"} style={{
    fontWeight: 600,
  
    ...styles
}}>
    {children}
</Typography>


const UHeading2 = ({children, styles}: THeadingProps) => <Typography variant={"h6"} style={{
    fontWeight: 500,
    ...styles
}}>
    {children}
</Typography>

const UHeading3 = ({children, styles}: THeadingProps) => <Typography variant={"body1"} style={{
    fontWeight: 400,
    ...styles
}}>
    {children}
</Typography>



export {UHeading1, UHeading2, UHeading3}
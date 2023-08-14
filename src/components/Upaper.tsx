import React from "react";

type TPaperProps = {
    children?: React.ReactNode
    styles?: { [style: string]: string | number }

}
const UPaper = ({ children, styles }: TPaperProps) => <div style={{
    border: "1.5px solid rgb(229 231 235)",
    background: "#FFFFFF",
    padding: "1.5em",
    borderRadius: 10,
    ...styles

}}
>
    {children}
</div>

export { UPaper }
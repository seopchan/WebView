import React from "react";
import "./AppCard.css";

export const AppCard = (props: { children: React.ReactNode, style?: React.CSSProperties }) => {
    return (
        <div className={"App-Card"}>
            {props.children}
        </div>
    );
}

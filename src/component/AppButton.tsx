import React from "react";
import "./AppButton.css";

export const AppButton = (props: {
  onClick: () => void,
  children: React.ReactNode,
  color?: string,
  backgroundColor?: string
  borderColor?: string
  border?: number
  style?: React.CSSProperties
}) => {
    return (
        <button
          onClick={props.onClick}
          className={"App-button"}
          style={{
            backgroundColor: props.backgroundColor,
            color: props.color,
            border: `${props.border}px solid ${props.borderColor}`,
            ...props.style
          }}
        >
            {props.children}
        </button>
    );
}

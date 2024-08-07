import { Input } from "@mui/material";
import React from "react";

function TextInput(props) {
  return (
    <div className={` input-group ${props.error ? "error" : ""}`}>
      <Input
        fullWidth
        className={` default-input-text ${props.className} ${
          props.error ? "input-error" : ""
        }`}
        name={props.name}
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.title}
        disableUnderline
        inputProps={{
          style: {
            paddingRight: 5,
          },
        }}
      />

      {props.error && <p className="error-message">{props.error}</p>}
    </div>
  );
}

export default TextInput;

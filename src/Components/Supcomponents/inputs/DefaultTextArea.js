import React from "react";

function DefaultTextArea(props) {
  return (
    <textarea
      style={{
        width: "100%",
        backgroundColor: "#A6CDD766",
        borderRadius: "12px",
        outline: "none",
        padding: "5px 5px 0  0",
      }}
      rows={props.rows}
      placeholder={props.title}
      className={"px-4" + props.className}
      name={props.name}
      onChange={props.onChange}
      alt={props.name}
    >
      {props.value}
    </textarea>
  );
}

export default DefaultTextArea;

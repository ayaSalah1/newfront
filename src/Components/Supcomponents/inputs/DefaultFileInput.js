import React from "react";

function DefaultFileInput(props) {
  return (
    <div className={"" + props.className}>
      <label
        className={"btn-primary w-full inline-block"}
        htmlFor="fileInput"
        style={{
          fontFamily: "Katibeh",
          fontWeight: 100,
          fontSize: "22px",
          textAlign: "right",
          color: "#42414180",
        }}
      >
        {props.title}
      </label>
      <input
        id="fileInput"
        name={props.name}
        className={"opacity-0 absolute w-0"}
        type={"file"}
      />
    </div>
  );
}

export default DefaultFileInput;

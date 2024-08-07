import React, { useState } from "react";

function TapsComponent(props) {
  const [activeTap, setActiveTap] = useState("first-tap");

  const handelTapsMovs = (e) => {
    setActiveTap(e.target.id);
  };

  const handelDisplayTaps = () => {
    switch (activeTap) {
      case "first-tap":
        return props.firstTapComponent;
      case "second-tap":
        return props.SecondTapComponent;
      case "third-tap":
        return props.ThirdTapComponent;
      case "fourth-tap":
        return props.FourthTapComponent;
      case "fifth-tap":
        return props.FifthTapComponent;
      default:
        return null;
    }
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="taps flex justify-start px-10">
        <ul className="list-taps flex w-full border-b-2 border-gray-300 flex-row gap-6">
          <li
            id="first-tap"
            onClick={handelTapsMovs}
            className={`item-tap ${
              activeTap === "first-tap" ? "active-tap" : ""
            }`}
            style={{
              borderBottom:
                activeTap === "first-tap" ? "2px solid #FFA726" : "none",
            }}
          >
            {props.firstTapTitle}
          </li>
          <li
            id="second-tap"
            onClick={handelTapsMovs}
            className={`item-tap ${
              activeTap === "second-tap" ? "active-tap" : ""
            }`}
            style={{
              borderBottom:
                activeTap === "second-tap" ? "2px solid #FFA726" : "none",
            }}
          >
            {props.secondTapTitle}
          </li>
          <li
            id="third-tap"
            onClick={handelTapsMovs}
            className={`item-tap ${
              activeTap === "third-tap" ? "active-tap" : ""
            }`}
            style={{
              borderBottom:
                activeTap === "third-tap" ? "2px solid #FFA726" : "none",
            }}
          >
            {props.thirdTapTitle}
          </li>
          <li
            id="fourth-tap"
            onClick={handelTapsMovs}
            className={`item-tap ${
              activeTap === "fourth-tap" ? "active-tap" : ""
            }`}
            style={{
              borderBottom:
                activeTap === "fourth-tap" ? "2px solid #FFA726" : "none",
            }}
          >
            {props.FourthTapTitle}
          </li>
          <li
            id="fifth-tap"
            onClick={handelTapsMovs}
            className={`item-tap ${
              activeTap === "fifth-tap" ? "active-tap" : ""
            }`}
            style={{
              borderBottom:
                activeTap === "fifth-tap" ? "2px solid #FFA726" : "none",
            }}
          >
            {props.FifthTapTitle}
          </li>
        </ul>
      </div>
      {handelDisplayTaps()}
    </div>
  );
}

export default TapsComponent;

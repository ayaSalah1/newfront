import React, { useState } from "react";
import TapsComponent from "../../Components/Taps.component";
import Notifications from "./components/Notifications";
import FirstTapComponent from "./components/FirstTapComponent";

const Chat = () => {
  return (
    <TapsComponent
      firstTapTitle={"المحادثات"}
      secondTapTitle={"الاجتماعات"}
      thirdTapTitle={"الاشعارات"}
      firstTapComponent={<FirstTapComponent />}
      ThirdTapComponent={<Notifications />}
    />
  );
};

export default Chat;

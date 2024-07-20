import React from 'react';
import profileIcon from "../assets/icons/profile.png"
import notificationIcon from "../assets/icons/notification.png";
import messageIcon from "../assets/icons/message.png";

function HeaderComponent(props) {
    return (
      <div className="header p-10 mx-auto my-6 flex flex-row-reverse w-10/12 justify-between items-center h-10 ">
          <div className={"flex gap-3 flex-row-reverse"}>
              <div className={"max-w-10"}>
                  <img className="max-w-full" src={profileIcon} alt="logo" />
              </div>
              <div className={"text-profile"}>
                  <h6>Admin</h6>
                  <h6>مسؤول</h6>
              </div>
          </div>
          <div className={"events flex gap-3"}>
              <div className={"messages"}>
                  <img className={"icon-item-event"} src={messageIcon} alt={"img"}/>
              </div>
              <div className={"notifications"}>
                  <img className={"icon-item-event"} src={notificationIcon} alt={"img"}/>
              </div>
          </div>
      </div>
    );
}

export default HeaderComponent;
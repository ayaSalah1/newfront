import React from 'react';
import profileIcon from "../assets/icons/profile.png"
import notificationIcon from "../assets/icons/notification.png";
import messageIcon from "../assets/icons/message.png";
import {useSelector} from "react-redux";

function HeaderComponent(props) {
    const user = useSelector((state) => state.user.data);
    return (
      <div className="header w-full bg-white mb-20 p-10 h-10 ">
          <div className={"w-10/12 mx-auto flex flex-row-reverse justify-between px-5 items-center"}>
              <div className={"flex gap-3 flex-row-reverse"}>
                  <div className={"max-w-10"}>
                      <img className="max-w-full" src={profileIcon} alt="logo"/>
                  </div>
                  <div className={"text-profile"}>

                      <h6>{user.name}</h6>
                      <h6>{user.role}</h6>
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
      </div>
    );
}

export default HeaderComponent;
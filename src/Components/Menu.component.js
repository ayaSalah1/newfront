import React from "react";
import homeIcon from "../assets/icons/home.png";
import usersIcon from "../assets/icons/users.png";
import mangeIcon from "../assets/icons/mange.png";
import chatsIcon from "../assets/icons/chats.png";
import analysisIcon from "../assets/icons/analysis.png";
import tweeterIcon from "../assets/icons/tweeter.png";
import settingIcon from "../assets/icons/setting.png";
import { NavLink } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
function MenuComponent(props) {
  const hoverFunction = ({ isActive, isPending }) => {
    return {
      background: isActive ? "#326472FF" : "",
    };
  };
  return (
    <div
      className={
        "menu bg-primary opacity-70 text-white w-1/12 rounded-lg flex justify-center items-center overflow-auto max-h-full min-h-full"
      }
    >
      <ul
        className={"list-menu flex flex-col items-center justify-center gap-3"}
      >
        <li className={"w-full"}>
          <NavLink
            to={"/"}
            style={hoverFunction}
            className="item-menu font-bold text-white flex flex-col items-center justify-center py-2"
          >
            <img className={"icon-item-menu"} src={homeIcon} alt={"img"} />
            <p className={"text-item-menu"}>الرئيسية</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/employees"}
            style={hoverFunction}
            className="item-menu font-bold text-white flex flex-col items-center justify-center py-2"
          >
            <img className={"icon-item-menu"} src={usersIcon} alt={"img"} />
            <p className={"text-item-menu"}>الأعضاء</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/management"}
            style={hoverFunction}
            className="item-menu font-bold text-white flex flex-col items-center justify-center py-2"
          >
            <img className={"icon-item-menu"} src={mangeIcon} alt={"img"} />
            <p className={"text-item-menu"}>ادارة المهام</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/chats"}
            style={hoverFunction}
            className="item-menu font-bold text-white flex flex-col items-center justify-center py-2"
          >
            <img className={"icon-item-menu"} src={chatsIcon} alt={"img"} />
            <p className={"text-item-menu"}>المحادثات</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/analyser"}
            style={hoverFunction}
            className="item-menu font-bold text-white flex flex-col items-center justify-center py-2"
          >
            <img className={"icon-item-menu"} src={analysisIcon} alt={"img"} />
            <p className={"text-item-menu"}>تحليل</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/catagories"}
            style={hoverFunction}
            className="item-menu font-bold text-white flex flex-col items-center justify-center py-2"
          >
            <GridViewIcon />
            <p className={"text-item-menu"}>تصنيفات</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/social-media"}
            style={hoverFunction}
            className="item-menu font-bold text-white flex flex-col items-center justify-center py-2"
          >
            <img className={"icon-item-menu"} src={tweeterIcon} alt={"img"} />
            <p className={"text-item-menu"}>تواصل اجتماعي</p>
          </NavLink>
        </li>

        <li className={"w-full"}>
          <NavLink
            to={"/settings"}
            style={hoverFunction}
            className="item-menu font-bold text-white flex flex-col items-center justify-center py-2"
          >
            <img className={"icon-item-menu"} src={settingIcon} alt={"img"} />
            <p className={"text-item-menu"}>اعدادات</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuComponent;

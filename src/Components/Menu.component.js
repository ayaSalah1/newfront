import React from "react";
import { NavLink } from "react-router-dom";

function MenuComponent(props) {
  const hoverFunction = ({ isActive, isPending }) => {
    return {
      background: isActive ? "#32C7C233" : "",
    };
  };
  return (
    <div
      className={
        "menu bg-[#F3F6F6] opacity-70 text-black w-1/12 rounded-lg flex justify-center items-center overflow-auto max-h-full min-h-full"
      }
    >
      <ul
        className={"list-menu flex flex-col items-center justify-start gap-5"}
      >
        <li className={"menu-item"}>
          <NavLink to={"/"} style={hoverFunction}>
            <img
              className={"logo"}
              src="https://s3-alpha-sig.figma.com/img/ea26/926c/46de885c571bf79eb8bf1db82a02b1d4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VJTT7jcXAM0uuFpzCde5~kNvn7UE40QFlZpFN0QEmkdVVYRHn~zUUMbtn4yCz3WE~Kcsdymi9XHjMy4BQvCXyKmo3rw~h-7Yclar2vDO5HxE-uICb~lJJpjj2-8Afm0SsoLqI76bG6MAwNWEXvjeebXsgxr5FAlXNPpwTXNBSGClmWPByB2JYvmCBV09Jzk7trhzguruElPaS4F16TQASpMefN-eKQygmFqunnLUnl-acjS8bxVNNmF2tH-u2K76nHE-gQaMwlpXneICLoXY6JnWkzkYSk5UUuuowe5S1XZQwbfOG6kTQdJqIMZxSi7~JRRWfH5GpBvavjT8DIkJpQ__"
              alt={"Logo"}
              style={{ marginBottom: "20px" }}
            />
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/"}
            style={hoverFunction}
            className="item-menu font-bold text-black flex flex-col items-center justify-center py-2"
          >
            <img
              className={"icon-item-menu"}
              src="https://s3-alpha-sig.figma.com/img/c280/a195/25cf77eda39ddb2a2ba0abd5f9ab74f9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-5OWptykNs0RhQjjS5lGs1c6EgPDb6c36Qky0TZwRZRbJDtOUN4HRxzV9PRugkkWw~JG6b5HsZbu5oXl6z-W6erp2bnTSfhV0uUKBGGtbvQitSxwUggGJRk-VnKiqUFGcu03Nvc4M9QlytOP~BFSIe~9AiiBm-S1bkCZJbm2QCZYJRumIa7fUJ9I2SCAhnrZ6ANVlBFV4k~8wPQGP-KgWQzGAGa8yzSI8BW41dk4aWeJ8AqIA~6iOUoGFv3D9OYt-KPKdWkKolgFEhoKocy1sFtbge-KqhPNq2SdwKuah-l7gFTWy9m0xWA7T8OYRY6cIaObstNEb6Km7PwJbzfWA__"
              alt={"img"}
            />
            <p className={"text-item-menu"}>الرئيسية</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/employees"}
            style={hoverFunction}
            className="item-menu font-bold text-black flex flex-col items-center justify-center py-2"
          >
            <img
              className={"icon-item-menu"}
              src="https://s3-alpha-sig.figma.com/img/f6f5/c085/3b63ae7d60c5e29e156cd6e108f135f4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kSSOtCbT0B5UbDVxePoS-kYjU4hfiR5fDuT-FWDkjtRKfgQIX94noaJYLUcQY-wDfJ7UPenP33Yw0y4a0oXADQErMhvovTu4QjgbNqAVnzFT7BCJIDZMK~-J4UrOZyPy0ac0OHmIwgJFmmRIDvjhJWYOJud7jVFvqO~lenGeJDxu-~ODPDvG9WqhegTGBq~xmPQdqaUYCc9z-sGgWZq1QMxpI76YIrcjtdk0g6ReMXB4tsuMHFc0bHmBW-7dSzugNZz7GfbsttKuI1uT3g3Y1YujAJohfjy79YhQ-uHk3p-AbSU7Rmwho9doGu4m5nNEsedKgnoDOPHG0dON0GayMA__"
              alt={"img"}
            />
            <p className={"text-item-menu"}>الأعضاء</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/management"}
            style={hoverFunction}
            className="item-menu font-bold text-black flex flex-col items-center justify-center py-2"
          >
            <img
              className={"icon-item-menu"}
              src="https://s3-alpha-sig.figma.com/img/7a59/a48a/d2614ca9f328835304ab84179a1bae8d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFyk5whyiMsCW4q4pnGgCQo3zdlBpoenI4R0m~Ghy~Bi1pa~L2Ryj14rvubdEOYRK7DXmcIkXxKeG90FHySdA7UMutlUXq~h0HaqDBJvhgUbKbjqH85sq-7fUzjWLmhGbE2bGwnIe6EscoxixGoJEnFiUlIEn~~~rYDvmcFbnW-ogfLuEmxN~pLC12NDS4Q0HvSrvkYRDA7SQLOdmrjwEHehFskDMqj0HjWp4aOQdYyjFOPy2kifxmry9Yo22SrsU7fN2ljWyQbxLhkRluEM-VpKBhLy87u9vI7KL0s2HTGMLRdt7RlTnK-nOdefyYEsYzyBWbDAR5y-N24l0OLeOg__"
              alt={"img"}
            />
            <p className={"text-item-menu"}>ادارة المهام</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/chats"}
            style={hoverFunction}
            className="item-menu font-bold text-black flex flex-col items-center justify-center py-2"
          >
            <img
              className={"icon-item-menu"}
              src="https://s3-alpha-sig.figma.com/img/e6ee/22ec/4c07e2f99850f7b04ae8e9f546bc81c4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0wrF~QlMdpjZpBYaof7WuxHKSBtEJQYC4xeij-6npZxOgu7etuQ~ZZRecJ-Q7LzhWxd3nv5~-WQHBeYpI7SKrob-oYwNAg8dpW8-CaSs1-p9NborszD3Se7gfB4GXwXLhhTFR6pc2TReCGz7dHYHTCAiZ6JrRDPHBIOdbroJhuhqfTOp29Qf7heCRYo4LV-XKkw0tOXfK~0AwMEcBi42R-JWM5aFQWMpWcEvnqJcwbmKm4ij5uv2utu9hMFKaVOez5tyY~9Y3VdkdtCeDz94OTS0iLugFThv6U0h3Mhdww5yBNygdoDUO1lv2rCYJrZBfCUA6WXk3MVY6XzpG293A__"
              alt={"img"}
            />
            <p className={"text-item-menu"}>المحادثات</p>
          </NavLink>
        </li>
        <li className={"w-full"}>
          <NavLink
            to={"/categories"}
            style={hoverFunction}
            className="item-menu font-bold text-black flex flex-col items-center justify-center py-2"
          >
            <img
              className={"icon-item-menu"}
              src="https://s3-alpha-sig.figma.com/img/44b0/cd5c/68aaffe6bd5f78a2046d166836a9ebb9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZjRas0BCHeZQK35tV2rCuVm78sV93aMpu58cz8YVlJlEvLhLrFJDH~BRCM~-rBRWJBcC-acCu2ZvaMwbpSNwy3vxdHxfjMtmuxR7NJlXFcI8iVJAfwyCtptSqJ3PJcaHUCGLQ~kuO7~UCmaktl4OotpFc5n4xDnbE6b0rmj6p5XjoyfDgKQMnyD05AdotIvylWajqsoHfIQ~VsodbS8GfQlMRugz1prDZX0DI-DplaIEMMvoJtxlJDAiHK5qZF1MtQ73FKqf6pxcbDWNGdiZ3A5H9udFccscx5t02u2l2ARFzxZAWmO4I8Xbwb5PWn~Shxju77opsYHBRcIahSkgA__"
              alt={"img"}
            />
            <p className={"text-item-menu"}>تصنيفات</p>
          </NavLink>
        </li>
        {/* <li className={"w-full"}>
          <NavLink
            to={"/social-media"}
            style={hoverFunction}
            className="item-menu font-bold text-black flex flex-col items-center justify-center py-2"
          >
            <img
              className={"icon-item-menu"}
              src="https://s3-alpha-sig.figma.com/img/a2e1/1d57/fa51a1bdfd5c3fed0d200bc24a30dab2?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E-wOxkWEx3-EYKjzcUPveO1ds~-W5cR2V4UtBhxsfxqRx0vLsGrSxnjqaOKGfegVKPUT-Pbhh4KuFTeQp5PmFpOQzO5UZLqnx2d1yG~Inu3CkdD23ANNOPWTf89wyP8WSyPBk0iA4rIkfMvoMN6XNfzCvE2~OtFpQHcXSOuoL4RTW8ZFweyM6LDaNrjIknSKMPk4I4sZT70xqId6sjxnFjt~TVgqtCZHuOdEzpJqw6l6fdcC4WkIjVsHYP44K8x-bjIVwdR9A9PrCzD3NmLHU0-x-RtUc6NuJDfdYq6WUKQk6Zg-cR7b1uwIdlV4BC4kG~lIkGN2IQZ~ACLvxHFqcA__"
              alt={"img"}
            />
            <p className={"text-item-menu"}>تواصل اجتماعي</p>
          </NavLink>
        </li> */}

        <li className={"w-full"}>
          <NavLink
            to={"/settings"}
            style={hoverFunction}
            className="item-menu font-bold text-black flex flex-col items-center justify-center py-2"
          >
            <img
              className={"icon-item-menu"}
              src="https://s3-alpha-sig.figma.com/img/2aea/2137/907aa5ea5207f83b07aa0eef2ff6a031?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VmO6l7SwLXyyiJnZ-1RicyeuLS2w2k6jIJGoZVdx3l3peHYOHPJJNjWP-MaIXDcF8bnQ~F3y-z2zePsNJtxRE45g3rpXFS1DRmmWD-cXFb2HQNnzlRehvecwEiODnXH2N00E5HIeAWn0LEMz54YjwnpcNZtns9u2wRamLpZWg5FTql9IUYWSNCncZ68cKGYEVMB2~yBDQRWea~oRhdg0pQBMITKfPeMXltijUXVzsxaB5uYXL2~sWETaz3mgGzZ0Rpw4lzYo7TOEytUCHc1ihr2~OguN0SWfQH4R-NXvb-8cNqmNUvF5LpU4GsxE0isG9bYT3C7kFZKNzxWRii-OHw__"
              alt={"img"}
            />
            <p className={"text-item-menu"}>اعدادات</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuComponent;

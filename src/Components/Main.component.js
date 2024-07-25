import React from 'react';
import HeaderComponent from "./Header.component";
import AppRoute from "../Routes/app.route";
import MenuComponent from "./Menu.component";

function MainComponent(props) {
    return (
        <div className="w-full flex flex-row max-h-screen">
            <MenuComponent/>
            <div className={"flex flex-col w-full"}>
                <HeaderComponent/>
                <div className="flex w-full flex-col">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default MainComponent;
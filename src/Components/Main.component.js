import React from 'react';
import HeaderComponent from "./Header.component";
import AppRoute from "../Router/app.route";

function MainComponent(props) {
    return (
        <div className="main flex w-full flex-col min-h-screen">
            <HeaderComponent/>
            <AppRoute/>
        </div>
    );
}

export default MainComponent;
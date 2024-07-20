import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home.page";

function AppRoute(props) {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/employees" element={<div className={"p-10"}> Employees </div>} />
            <Route path="/management" element={<div className={"p-10"}> management </div>} />
            <Route path="/chats" element={<div className={"p-10"}> chats </div>} />
            <Route path="/analyser" element={<div className={"p-10"}> analyser </div>} />
            <Route path="/social-media" element={<div className={"p-10"}> social-media </div>} />
            <Route path="/settings" element={<div className={"p-10"}> settings </div>} />

            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    );
}

export default AppRoute;
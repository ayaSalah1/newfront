import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainComponent from "../Components/Main.component";
import HomePage from "../pages/Home.page";
import EmployeesPage from "../pages/Employees.page";
import Chat from "../pages/Chat/Chat";
import ManageTasks from "../pages/ManageTasks/ManageTasks";

function AdminRoute(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainComponent>
            <HomePage />
          </MainComponent>
        }
      />
      <Route
        path="/employees"
        element={
          <MainComponent>
            <EmployeesPage />
          </MainComponent>
        }
      />
      <Route
        path="/management"
        element={
          <MainComponent>
            <div className={"p-10"}>
              <ManageTasks />
            </div>
          </MainComponent>
        }
      />
      <Route
        path="/chats"
        element={
          <MainComponent>
            <div className={"p-10"}>
              <Chat />
            </div>
          </MainComponent>
        }
      />
      <Route
        path="/analyser"
        element={
          <MainComponent>
            <div className={"p-10"}> analyser </div>
          </MainComponent>
        }
      />
      <Route
        path="/categories"
        element={
          <MainComponent>
            <div className={"p-10"}> categories </div>
          </MainComponent>
        }
      />
      <Route
        path="/social-media"
        element={
          <MainComponent>
            <div className={"p-10"}> social-media </div>
          </MainComponent>
        }
      />
      <Route
        path="/settings"
        element={
          <MainComponent>
            <div className={"p-10"}> settings </div>
          </MainComponent>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AdminRoute;

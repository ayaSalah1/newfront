import React from 'react';
import TapsComponent from "../Components/Taps.component";
import HomeEmployeesTap from "../Components/EmployeesComponents/Taps/Home.employees.tap";
import DepartmentsEmployeesTap from "../Components/EmployeesComponents/Taps/Departments.employees.tap";
import EmployeesEmployeesTap from "../Components/EmployeesComponents/Taps/Employees.employees.tap";
import PlanningEmployeesTap from "../Components/EmployeesComponents/Taps/Planning.employees.tap";

function EmployeesPage() {
    return (
        <TapsComponent firstTapTitle={"الرئيسية"}
                       secondTapTitle={"الأقسام"}
                       thirdTapTitle={"الموظفين"}
                       FourthTapTitle={"التخطيط"}
                       firstTapComponent={<HomeEmployeesTap />}
                       SecondTapComponent={<DepartmentsEmployeesTap />}
                       ThirdTapComponent={<EmployeesEmployeesTap />}
                       FourthTapComponent={<PlanningEmployeesTap />}
        />
    );
}

export default EmployeesPage;
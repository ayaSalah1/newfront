import React from 'react';
import TapsComponent from "../Components/Taps.component";
import HomeEmployeesTap from "../Components/EmployeesComponents/Taps/Home.employees.tap";
import DepartmentsEmployeesTap from "../Components/EmployeesComponents/Taps/Departments.employees.tap";
import EmployeesEmployeesTap from "../Components/EmployeesComponents/Taps/Employees.employees.tap";
import PlanningEmployeesTap from "../Components/EmployeesComponents/Taps/Planning.employees.tap";
import ManageTasksTap from "../Components/ManageTasksComponents/Taps/ManageTasksTap";
import ListTasksTap from "../Components/ManageTasksComponents/Taps/ListTasksTap";

function ManageTasksPage(props) {
    return (
        <TapsComponent firstTapTitle={"ادارة المهام"}
                       secondTapTitle={"قائمة"}
                       thirdTapTitle={"المهام والتفيمات"}
                       FourthTapTitle={"التحليلات"}
                       FifthTapTitle={"المشاكل"}
                       firstTapComponent={<ManageTasksTap />}
                       SecondTapComponent={<ListTasksTap />}
                       ThirdTapComponent={<EmployeesEmployeesTap />}
                       FourthTapComponent={<PlanningEmployeesTap />}
                       FifthTapComponent={(<div> </div>)}
        />
    );
}

export default ManageTasksPage;
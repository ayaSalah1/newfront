import React from 'react';
import TapsComponent from "../Components/Taps.component";
import HomeTap from "../Components/HomeComponents/Taps/Home.tap";
import AddDepartmentTap from "../Components/HomeComponents/Taps/AddDepartment.tap";
import AddNewEmployeeTap from "../Components/HomeComponents/Taps/AddNewEmployee.tap";
import AddNewTaskTap from "../Components/HomeComponents/Taps/AddNewTask.tap";

function HomePage(props) {

    return (
            <TapsComponent firstTapTitle={"الرئيسية"}
                           secondTapTitle={"اضافة قسم"}
                           thirdTapTitle={"اضافة موظف جديد"}
                           FourthTapTitle={"انشاء مهمة"}
                           firstTapComponent={<HomeTap />}
                           SecondTapComponent={<AddDepartmentTap />}
                           ThirdTapComponent={<AddNewEmployeeTap />}
                           FourthTapComponent={<AddNewTaskTap />}
            />
    );
}

export default HomePage;
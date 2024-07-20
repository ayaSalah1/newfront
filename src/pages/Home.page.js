import React, {useEffect, useState} from 'react';
import TapsHomeComponent from "../Components/HomeComponents/Taps.home.component";
import HomeTap from "../Components/HomeComponents/Taps/Home.tap";
import AddDepartmentTap from "../Components/HomeComponents/Taps/AddDepartment.tap";
import AddNewEmployeeTap from "../Components/HomeComponents/Taps/AddNewEmployee.tap";
import AddNewTaskTap from "../Components/HomeComponents/Taps/AddNewTask.tap";

function HomePage(props) {
    const [isHomeTap,setIsHomeTap] = useState(true)
    const [isAddDepartmentTap,setIsAddDepartmentTap] = useState(false)
    const [isAddEmployeeTap,setIsAddEmployeeTap] = useState(false)
    const [isAddTaskTap,setIsAddTaskTap] = useState(false)
    const [displayTap,setDisplayTap] = useState({})

    const handelTapsMovs = (e) =>{
        switch(e.target.id){
            case "home-tap":
                setIsHomeTap(true)
                setIsAddDepartmentTap(false)
                setIsAddEmployeeTap(false)
                setIsAddTaskTap(false)
                break
            case "add-department-tap":
                setIsHomeTap(false)
                setIsAddDepartmentTap(true)
                setIsAddEmployeeTap(false)
                setIsAddTaskTap(false)
                break
            case "add-employee-tap":
                setIsHomeTap(false)
                setIsAddDepartmentTap(false)
                setIsAddEmployeeTap(true)
                setIsAddTaskTap(false)
                break
            case "add-task-tap":
                setIsHomeTap(false)
                setIsAddDepartmentTap(false)
                setIsAddEmployeeTap(false)
                setIsAddTaskTap(true)
                break
            default:
                setIsHomeTap(true)
                setIsAddDepartmentTap(false)
                setIsAddEmployeeTap(false)
                setIsAddTaskTap(false)
                break
        }
    }

    const handelDisplayTaps = () => {
        if(isHomeTap){
            return <HomeTap />
        }else if(isAddDepartmentTap){
            return <AddDepartmentTap />
        }else if(isAddEmployeeTap){
            return <AddNewEmployeeTap />
        }else if(isAddTaskTap){
            return <AddNewTaskTap />
        }
    }

    return (
        <div className={"w-10/12 mx-auto"}>
            <TapsHomeComponent tapsStates={{isHomeTap,isAddDepartmentTap,isAddEmployeeTap,isAddTaskTap}} handleTapsMovs={handelTapsMovs}/>
            {handelDisplayTaps()}
        </div>
    );
}

export default HomePage;
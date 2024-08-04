import React from 'react';
import EditAndDeleteIcons from "../../Supcomponents/Buttons/EditAndDeleteIcons";
import ListTasksComponent from "../ListTasks.component";

function ManageTasksTap(props) {
    return (
        <div className={"container p-10 box-border"}>
            <div className={"flex flex-col"}>
                <div className={"flex flex-wrap justify-between"}>
                    <ListTasksComponent/>
                    <ListTasksComponent/>
                    <ListTasksComponent/>
                    <ListTasksComponent/>
                    <ListTasksComponent/>
                    <ListTasksComponent/>
                </div>
                <div className={"new-task bg-primary-100 rounded-xl py-5 px-3 gap-5 w-[32%] mb-5  flex items-center cursor-pointer"}>
                    <i className="fa-solid fa-plus"></i>
                    <div>
                        اضافة قائمة مهام
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTasksTap;